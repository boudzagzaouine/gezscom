import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ElementType,
  FormHTMLAttributes,
  HTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  OptionHTMLAttributes,
  ReactNode,
} from "react";
import type {
  FieldValues,
  RegisterOptions,
  SubmitHandler,
} from "react-hook-form";
import type { UrlObject } from "url";

export interface ViewProps<T extends HTMLElement = HTMLElement>
  extends HTMLAttributes<T> {
  as?: ElementType;
  col?: boolean;
  row?: boolean;
}

export type TextElement =
  | string
  | HTMLSpanElement
  | HTMLDivElement
  | HTMLParagraphElement
  | HTMLHeadingElement
  | HTMLElement;

export interface TextProps<T extends HTMLElement = HTMLElement>
  extends HTMLAttributes<T> {
  as?: ElementType;
}

declare type Url = string | UrlObject;

export interface LinkProps<T extends HTMLAnchorElement = HTMLAnchorElement>
  extends Omit<AnchorHTMLAttributes<T>, "href"> {
  href: Url;
  as?: ElementType;
}
export interface AnchorProps<T extends HTMLAnchorElement = HTMLAnchorElement>
  extends AnchorHTMLAttributes<T> {}

export type ValueType =
  | string
  | ReadonlyArray<string>
  | number
  | undefined
  | boolean;

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}
export interface OptionProps extends OptionHTMLAttributes<HTMLOptionElement> {}

export type FormControlElement =
  | string
  | HTMLInputElement
  | HTMLSelectElement
  | HTMLTextAreaElement;

export interface FormControlProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "value" | "defaultValue"
  > {
  value?: ValueType;
  defaultValue?: ValueType;
  as?: ElementType;
}

export interface InputProps extends FormControlProps {
  label?: string;
  inputClass?: string;
  labelClass?: string;
  prepend?: ReactNode;
  append?: ReactNode;
  row?: boolean;
  meta?: FieldMetaProps;
}
export interface FieldProps extends InputProps {
  rules?: Exclude<
    RegisterOptions,
    "valueAsNumber" | "valueAsDate" | "setValueAs"
  >;
}
export interface FieldMetaProps {
  touched: boolean;
  invalid?: boolean;
  error?: string;
}

export interface ErrorProps extends ViewProps {
  meta?: FieldMetaProps;
}

export interface FormProps<T extends FieldValues = FieldValues>
  extends Omit<FormHTMLAttributes<HTMLFormElement>, "onSubmit"> {
  defaultValues: T;
  onSubmit?: SubmitHandler<T>;
}

export interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {
  confirm?: string;
  variant?: string;
  size?: string;
  label?: string;
  backgroundColor?: string;
  primary?: boolean;
}
