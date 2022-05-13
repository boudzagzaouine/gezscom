import { Input } from "widgets/Input";
import type { FieldProps, FieldValues, PolymorphicRef } from "widgets/types";
import { useController } from "hooks/form";
import { useTranslation } from "hooks/translate";
import { forwardRef, useMemo } from "react";

export const Field = forwardRef(
  <
    C extends React.ElementType = "input",
    TValues extends FieldValues = FieldValues
  >(
    props: FieldProps<C, TValues>,
    ref?: PolymorphicRef<C>
  ) => {
    const { t } = useTranslation("common");
    const { field, fieldState, formState } = useController(props);
    // useEffect(() => {
    //   console.log("changement formState.isSubmitted", field.name);
    // }, [formState.isSubmitted]);
    // useEffect(() => {
    //   console.log("changement fieldState.isTouched", field.name);
    // }, [fieldState.isTouched]);
    // useEffect(() => {
    //   console.log("changement fieldState.invalid", field.name);
    // }, [fieldState.invalid]);
    // if (ref?.current) {
    //   console.log("current ? ", ref.current);
    //   field.ref(ref.current);
    // }
    const forwardedRef = ref || field.ref;
    const meta = useMemo(() => {
      // console.log("recalcul de meta", field.name);
      let error: string | undefined = undefined;
      if (fieldState.error) {
        error =
          fieldState.error.message ||
          (fieldState.error.type === "required"
            ? t("field-required")
            : t("field-invalid"));
      }
      return {
        touched: formState.isSubmitted || fieldState.isTouched,
        error,
        invalid: fieldState.invalid,
      };
    }, [fieldState?.error?.message, fieldState?.error?.type]);
    return <Input {...field} meta={meta} ref={forwardedRef} {...props} />;
  }
);
