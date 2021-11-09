import { useCallback } from "react";
import { Form, Field, Text, Button } from "components";
import type { ComponentMeta } from "@storybook/react";

export default {
  title: "Exemples/Form",
  component: Form,
  subcomponents: { Field, Button },
} as ComponentMeta<typeof Form>;

interface Contact {
  firstName: string;
  lastName?: string;
  genre?: string;
  conditions?: boolean;
}
const defaultValues: Contact = {
  firstName: "",
  lastName: "",
  // 'genre': '',
  conditions: false,
};

let counter = 0;
export function ExampleForm() {
  counter++;
  const onSubmit = useCallback((data) => void console.log(data), []);

  return (
    <>
      <Text as="h1">Smart Form Component {counter}</Text>
      <Form defaultValues={defaultValues} onSubmit={onSubmit}>
        <Field
          label="Prénom"
          name="firstName"
          rules={{
            required: "ce champ est obligatoire",
            maxLength: { value: 10, message: "max len 10" },
          }}
        />
        <Field
          label="Nom"
          name="lastName"
          rules={{
            required: true,
            minLength: { value: 5, message: "min len 5" },
          }}
        />
        <Field
          as="select"
          label="Genre"
          name="genre"
          rules={{ required: true }}
        >
          <option></option>
          <option value="H">Homme</option>
          <option value="F">Femme</option>
        </Field>
        <Field
          type="checkbox"
          label="Accepter les conditions"
          name="conditions"
          rules={{ required: true }}
        />

        <Button type="submit">Submit</Button>
      </Form>
    </>
  );
}

/*
export function ExampleInteractiveForm() {
  counter++;
  const onSubmit = useCallback(
     (data) => void console.log(data),
      [],
  );

  return (
    <>
      <Text as="h1">Smart Form Component {counter}</Text>
      <Form defaultValues={defaultValues} onSubmit={onSubmit}>
        {({control}) => {
          const firstName = useWatch({control, name: "firstName"});
          return (
            <>
              {firstName}
              <Field label="Prénom" name="firstName" rules={{ required: "ce champ est obligatoire", maxLength: {value: 10, message: "max len 10"}}} />
              <Field label="Nom" name="lastName" rules={{ required: true, minLength: {value: 5, message: "min len 5"}}} />
              <Field as="select" label="Genre" name="genre"  rules={{ required: true }}>
                <option></option>  
                <option value="H">Homme</option>  
                <option value="F">Femme</option>  
              </Field>
              <Field type="checkbox" append={<Text>Accepter les conditions</Text>} name="conditions" rules={{ required: true }} />
              <Button type="submit">Submit</Button>

            </>
        )}}
      </Form>
    </>
  );
}
*/
