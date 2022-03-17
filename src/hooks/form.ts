import { SyntheticEvent, useRef, useState } from "react";

export { useController, useForm, useWatch } from "react-hook-form";

type Value = number | string | string[] | undefined;
type FormRecord = Record<string, Value>;
type UseFormType<FieldValues extends FormRecord = FormRecord> = {
  defaultValues: FieldValues;
};

export const useField = (defaultValue: Value) => {
  const [value, setValue] = useState(defaultValue);
  const onChange = (e: SyntheticEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };
  return { value, onChange };
};

export const useFormInteractive = <FieldValues extends FormRecord = FormRecord>(
  defaultValue: FieldValues
) => {
  const [values, setValues] = useState(defaultValue);
  // values = {firstName: '', lastName: ''};
  const onChange = (e: SyntheticEvent<HTMLInputElement>) => {
    console.log("change : ", e.currentTarget.name, e.currentTarget.value);
    const newValues = { ...values };
    (newValues as Record<string, Value>)[e.currentTarget.name] =
      e.currentTarget.value;
    setValues(newValues);
  };
  const register = (name: keyof FieldValues) => ({
    name,
    value: values[name],
    onChange,
  });
  return { register, values };
};

export const useFormNonInteractive = <
  FieldValues extends FormRecord = FormRecord
>({
  defaultValues,
}: UseFormType<FieldValues>) => {
  const values = useRef<FieldValues>(defaultValues);
  // values = {firstName: '', lastName: ''};
  const onChange = (e: SyntheticEvent<HTMLInputElement>) => {
    console.log("change : ", e.currentTarget.name, e.currentTarget.value);
    (values.current as Record<string, Value>)[e.currentTarget.name] =
      e.currentTarget.value;
  };
  const register = (name: keyof FieldValues) => ({
    name,
    defaultValue: values.current[name],
    onChange,
  });
  // fonction d ordre superieur :
  const handleSubmit =
    (onValid: (d: FieldValues) => void) =>
    (e: SyntheticEvent<HTMLFormElement>) => {
      e.preventDefault();
      onValid(values.current);
    };
  return { register, values, handleSubmit };
};
