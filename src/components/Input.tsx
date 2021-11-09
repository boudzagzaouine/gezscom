import { forwardRef } from "react";
import classNames from "classnames";

import { Form } from "components/Form";
import { View } from "components/View";
import { StringUtils } from "utils/StringUtils";
import type { FC } from "react";
import type { InputProps, FormControlElement } from "components/types";

export const Input: FC<InputProps> = forwardRef<FormControlElement, InputProps>(
  (
    {
      id = StringUtils.uniqueId(),
      label,
      meta,
      prepend,
      append,
      row,
      inputClass = "",
      className = "",
      labelClass = "",
      ...props
    },
    ref
  ) => {
    const { as: asComponent = "input", type } = props;
    const isInput = asComponent === "input";
    let isCheckbox = false;
    let isRadio = false;
    if (isInput) {
      if (type === "radio") {
        isRadio = true;
      } else if (type === "checkbox") {
        isCheckbox = true;
      }
    }
    const inputClassName = classNames(
      `focus:ring-indigo-500 focus:border-indigo-500 border-gray-300`,
      isRadio || isCheckbox
        ? "rounded h-4 w-4"
        : "block w-full sm:text-sm shadow-sm",
      { "border-red-400": meta?.invalid },
      prepend && !(isRadio || isCheckbox) ? "rounded-r-md" : "rounded-md",
      inputClass
    );
    const labelClassName = classNames(
      `block text-sm font-medium text-gray-700`,
      { "ml-2": isRadio || isCheckbox },
      labelClass
    );
    const containerClassName = classNames("col-span-6", className);
    const inputWrapperClassName = classNames("mt-1 flex rounded-md", {
      "items-center": isRadio || isCheckbox,
    });

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
);
