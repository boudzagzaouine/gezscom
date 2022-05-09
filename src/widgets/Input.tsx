import classNames from "classnames";
import { Form } from "widgets/Form";
import type { InputProps, PolymorphicRef } from "widgets/types";
import { View } from "widgets/View";
import { forwardRef, memo } from "react";
import { StringUtils } from "utils/StringUtils";

export const Input = memo(
  forwardRef(
    <C extends React.ElementType = "input">(
      {
        label,
        meta,
        prepend,
        append,
        row,
        inputClass = "",
        labelClass = "",
        ...props
      }: InputProps<C>,
      ref?: PolymorphicRef<C>
    ) => {
      const { as: asComponent = "input", type } = props;
      const id = props.id || StringUtils.uniqueId();
      const className = props.className || "";
      const isInput = asComponent === "input";
      const isTextArea = asComponent === "textarea";
      const isSelect = asComponent === "select";
      let isCheckbox = false;
      let isRadio = false;
      if (isInput) {
        if (type === "radio") {
          isRadio = true;
        } else if (type === "checkbox") {
          isCheckbox = true;
        }
      }
      // console.log('render input ? ', label);
      const inputClassName = classNames(
        `border outline-slate-200 float-left rounded w-full`,
        {
          "py-8": isTextArea,
          "py-2": isInput || isSelect,
        },
        // isRadio || isCheckbox
        //   ? "rounded h-4 w-4"
        //   : "block w-full sm:text-sm shadow-sm",
        // { "border-red-400": meta?.invalid },
        // prepend && !(isRadio || isCheckbox) ? "rounded-r-md" : "rounded-md",
        inputClass
      );
      const labelClassName = classNames(
        `w-full block font-medium text-gray-700 sm:mt-px sm:pt-2 `,
        { "ml-2": isRadio || isCheckbox },
        labelClass
      );
      const containerClassName = classNames(
        "sm:grid sm:grid-cols-4 sm:gap-4 sm:items-start sm:pt-5 w-full",
        className
      );
      const inputWrapperClassName = classNames(
        " disabled:border disabled:border-pink-300 mt-1 sm:mt-0 sm:col-span-2",
        {
          "items-center": isRadio || isCheckbox,
        }
      );

      const labelUi = label ? (
        <Form.Label htmlFor={id} className={labelClassName}>
          {label}
        </Form.Label>
      ) : null;
      return (
        <View row={row} className={containerClassName}>
          {!(isCheckbox || isRadio) && labelUi}
          <View className={inputWrapperClassName}>
            {prepend}
            <Form.Control
              id={id}
              ref={ref}
              type="text"
              {...props}
              className={inputClassName}
            />
            {(isCheckbox || isRadio) && labelUi}
            {append}
          </View>
          <Form.Error meta={meta} />
        </View>
      );
    }
  )
);
