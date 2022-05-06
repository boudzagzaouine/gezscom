import type {
  ErrorProps,
  FieldValues,
  FormControlProps,
  FormProps,
  LabelProps,
  OptionProps,
  PolymorphicRef,
  SubmitHandler,
} from "widgets/types";
import { useForm } from "hooks/form";
import { FC, useCallback, useEffect } from "react";
import { forwardRef } from "react";
import { FormProvider } from "react-hook-form";
import { ObjectUtils } from "utils/ObjectUtils";

const Label: FC<LabelProps> = (props) => <label {...props} />;

const Control = forwardRef(
  <C extends React.ElementType = "input">(
    { as, options, ...props }: FormControlProps<C>,
    ref?: PolymorphicRef<C>
  ) => {
    const Component = as || "input";
    const isSelect = Component === "select";
    const { value, defaultValue } = props;
    // console.log('log control ? ', props);
    let additionalProps: Partial<FormControlProps> = {};
    if (value !== undefined && value !== null) {
      additionalProps = { checked: "true" === `${value}` };
    } else if (defaultValue !== undefined && defaultValue !== null) {
      additionalProps = { defaultChecked: "true" === `${defaultValue}` };
    }
    if (isSelect && options) {
      const selectOptions = options.map((option) => {
        const optionValue = typeof option === "string" ? option : option.id;
        const optionLabel =
          typeof option === "string" ? option : option.label ?? option.id;
        return (
          <Option key={optionValue} value={optionValue}>
            {optionLabel}
          </Option>
        );
      });
      additionalProps["children"] = selectOptions;
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
  children,
  onSubmit,
  resetOnSuccessfulSubmit = true,
  ...useFormProps
}: FormProps<T>) => {
  const methods = useForm<T>(useFormProps);
  const { defaultValues } = useFormProps;
  const { reset, formState } = methods;
  useEffect(() => {
    if (defaultValues) {
      // console.log("reset form ?", defaultValues);
      reset(defaultValues);
    }
  }, [defaultValues]);
  useEffect(() => {
    if (resetOnSuccessfulSubmit && formState.isSubmitSuccessful) {
      // console.log("reset form with : ", defaultValues);
      reset(defaultValues);
    }
  }, [formState.isSubmitSuccessful]);

  const defaultOnSubmit: SubmitHandler<T> = useCallback((data) => {
    console.log("No onSubmit method defined on Form ? ", data);
  }, []);
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
