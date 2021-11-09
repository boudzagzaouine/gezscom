import { forwardRef } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

import { Text } from "components/Text";
import { ObjectUtils } from "utils/ObjectUtils";
import type { FC } from "react";
import type {
  FormControlProps,
  FormControlElement,
  FormProps,
  LabelProps,
  OptionProps,
  ErrorProps,
} from "components/types";

const Label: FC<LabelProps> = (props) => <label {...props} />;

const Control = forwardRef<FormControlElement, FormControlProps>(
  ({ as: Component = "input", ...props }, ref) => {
    const { value, defaultValue } = props;
    let additionalProps = {};
    if (value !== undefined && value !== null) {
      additionalProps = { checked: "true" === `${value}` };
    } else if (defaultValue !== undefined && defaultValue !== null) {
      additionalProps = { defaultChecked: "true" === `${defaultValue}` };
    }
    return <Component ref={ref} {...additionalProps} {...props} />;
  }
);

const Option: FC<OptionProps> = (props) => <option {...props} />;

const Error: FC<ErrorProps> = ({ meta, ...props }) => {
  return meta && meta.touched && meta.error ? (
    <Text
      as="div"
      className="block text-sm font-medium text-red-400"
      {...props}
    >
      {meta.error}
    </Text>
  ) : null;
};

interface IForm extends FC<FormProps> {
  Label: FC<LabelProps>;
  Control: typeof Control;
  Option: FC<OptionProps>;
  Error: typeof Error;
}

export const Form: IForm = ({ defaultValues, children, onSubmit }) => {
  type FormFieldValues = typeof defaultValues;
  const methods = useForm<FormFieldValues>({ defaultValues });
  const defaultOnSubmit: SubmitHandler<FormFieldValues> = (_data) => {};
  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit || defaultOnSubmit)}>
        {
          //@ts-ignore
          ObjectUtils.isFunction(children) ? children({ ...methods }) : children
        }
      </form>
    </FormProvider>
  );
};

Form.Label = Label;
Form.Control = Control;
Form.Option = Option;
Form.Error = Error;
