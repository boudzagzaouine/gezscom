import type { ComponentMeta } from "@storybook/react";
import { Button, Field, Form, Text } from "components";
import type { UseFormReturn } from "components/types";
import { useWatch } from "hooks/form";
import { useCallback } from "react";

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
export function ThemeForm() {
  return (
    <div className="lg:flex max-w-5xl min-h-screen mx-auto p-6 py-10">
      <div className="flex flex-col items-center lg: lg:flex-row lg:space-x-10">
        <div className="lg:mb-12 flex-1 lg:text-left text-center">
          <img
            src="assets/images/logo.png"
            alt=""
            className="lg:mx-0 lg:w-52 mx-auto w-40"
          />
          <p className="font-medium lg:mx-0 md:text-2xl mt-6 mx-auto sm:w-3/4 text-xl">
            {" "}
            Connect with friends and the world around you on Socialite.
          </p>
        </div>
        <div className="lg:mt-0 lg:w-96 md:w-1/2 sm:w-2/3 mt-10 w-full">
          <form className="p-6 space-y-4 relative bg-white shadow-lg rounded-lg">
            <input
              type="email"
              placeholder="Email or Phone Number"
              className="with-border"
            />
            <input
              type="password"
              placeholder="Password"
              className="with-border"
            />
            <button
              type="button"
              className="bg-blue-600 font-semibold p-3 rounded-md text-center text-white w-full"
            >
              Log In
            </button>
            <a href="#" className="text-blue-500 text-center block">
              {" "}
              Forgot Password?{" "}
            </a>
            <hr className="pb-3.5" />
            <div className="flex">
              <a
                href="#register"
                type="button"
                className="bg-green-600 hover:bg-green-500 hover:text-white font-semibold py-3 px-5 rounded-md text-center text-white mx-auto"
                uk-toggle
              >
                Create New Account
              </a>
            </div>
          </form>

          <div className="mt-8 text-center text-sm">
            {" "}
            <a href="#" className="font-semibold hover:underline">
              {" "}
              Create a Page{" "}
            </a>{" "}
            for a celebrity, band or business{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ExampleForm() {
  const onSubmit = useCallback((data: Contact) => console.log(data), []);
  counter++;

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

export function ExampleInteractiveForm() {
  const onSubmit = useCallback((data: Contact) => void console.log(data), []);
  counter++;

  return (
    <>
      <Text as="h1">Smart Form Component {counter}</Text>
      <Form defaultValues={defaultValues} onSubmit={onSubmit}>
        {({ control }: UseFormReturn<Contact>) => {
          const firstName = useWatch({ control, name: "firstName" });
          return (
            <>
              <Field
                label="Prénom"
                name="firstName"
                rules={{
                  required: "ce champ est obligatoire",
                  maxLength: { value: 10, message: "max len 10" },
                }}
              />
              <Text> {firstName}</Text>
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
                append={<Text>Accepter les conditions</Text>}
                name="conditions"
                rules={{ required: true }}
              />
              <Button type="submit">Submit</Button>
            </>
          );
        }}
      </Form>
    </>
  );
}
