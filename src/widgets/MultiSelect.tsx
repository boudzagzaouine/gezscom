import { FC, SyntheticEvent, useCallback, useState } from "react";

type Option = {
  id: string;
  label?: string;
};

type MultiSelectProps = {
  options: Option[];
  value?: string[];
  onChange: (value: string[]) => void;
};

export const MultiSelect: FC<MultiSelectProps> = ({
  options,
  value = [],
  onChange,
  ...props
}) => {
  console.log("multi select rules ? ", props);
  const [values, setValues] = useState(value);
  const handleChange = useCallback(
    ({ currentTarget }: SyntheticEvent<HTMLInputElement>) => {
      const checked = currentTarget.checked;
      const value = currentTarget.value;
      let newValues = [...values];
      if (checked) {
        newValues.push(value);
      } else {
        newValues = newValues.filter((v) => v !== value);
      }
      // console.log('handle change', value, checked, newValues);
      setValues(newValues);
      onChange(newValues);
    },
    [values]
  );
  // console.log('multiselect props ?', values, '1' in values);
  return (
    <div>
      {options.map((option) => {
        return (
          <label key={option.id}>
            <input
              onChange={handleChange}
              checked={values.includes(option.id)}
              type="checkbox"
              value={option.id}
            />
            {option.label || option.id}
          </label>
        );
      })}
    </div>
  );
};
