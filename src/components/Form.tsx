import type {
  ErrorProps,
  FieldValues,
  FormControlProps,
  FormProps,
  LabelProps,
  OptionProps,
  PolymorphicRef,
  SubmitHandler
} from "components/types";
import { useForm } from "hooks/form";
import type { FC } from "react";
import { forwardRef } from "react";
import { FormProvider } from "react-hook-form";
import { ObjectUtils } from "utils/ObjectUtils";

const Label: FC<LabelProps> = (props) => <label {...props} />;

const Control = forwardRef(
  <C extends React.ElementType = "input">(
    { as, ...props }: FormControlProps<C>,
    ref?: PolymorphicRef<C>
  ) => {
    const Component = as || "input";
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
    <Label className="mb-0" {...props}>
      {meta.error}
    </Label>
  ) : null;
};

export const Form = <T extends FieldValues = FieldValues>({
  defaultValues,
  children,
  onSubmit,
}: FormProps<T>) => {
  const methods = useForm<T>({ defaultValues });
  const defaultOnSubmit: SubmitHandler<T> = (_data) => {};
  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit || defaultOnSubmit)}>
        {ObjectUtils.isFunction(children) ? children(methods) : children}
      </form>
    </FormProvider>
  );
};

Form.Label = Label;
Form.Control = Control;
Form.Option = Option;
Form.Error = Error;
