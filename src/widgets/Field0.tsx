import { Input } from "widgets/Input";
import type { FieldProps, FieldValues, PolymorphicRef } from "widgets/types";
import { useController } from "hooks/form";
import { useTranslation } from "hooks/translate";
import { forwardRef, ReactElement, useMemo } from "react";

const Field = (props:any):ReactElement<any,any>=>{
return (
  <>
  <input type="text" {...props}/>
  </>
)
}
export default Field