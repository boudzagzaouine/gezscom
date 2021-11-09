import { forwardRef } from "react";

import { useController } from "react-hook-form";
import { Input } from "components/Input";
import type { FormControlElement, FieldProps } from "components/types";

export const Field = forwardRef<FormControlElement, FieldProps>(
  (props, _ref) => {
    //@ts-ignore
    const { field, fieldState, formState } = useController(props);
    let error = undefined;
    if (fieldState.error) {
      //TODO internationalisation
      error =
        fieldState.error.message ||
        (fieldState.error.type === "required"
          ? "Champ obligatoire"
          : "Champ invalide");
    }
    const meta = {
      touched: formState.isSubmitted || fieldState.isTouched,
      error,
      invalid: fieldState.invalid,
    };
    return <Input {...field} meta={meta} {...props} />;
  }
);
