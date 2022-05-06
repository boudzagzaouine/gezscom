import React from "react";
import { Input } from "widgets";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "UI/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const InputText = Template.bind({});
InputText.args = {
  name: "email",
  label: "Email",
  row: true,
};

export const Checkbox = Template.bind({});
Checkbox.args = {
  name: "composants",
  type: "checkbox",
  label: "Composants",
};

export const Radio = Template.bind({});
Radio.args = {
  name: "genre",
  type: "radio",
  label: "Homme",
};

export const Select = Template.bind({});
Select.args = {
  name: "ville",
  label: "Ville",
  as: "select",
  children: (
    <>
      <option>1</option>
      <option>2</option>
    </>
  ),
};

export const Textarea = Template.bind({});
Textarea.args = {
  name: "apropos",
  label: "A propos",
  as: "textarea",
};

export const InputGroup = Template.bind({});
InputGroup.args = {
  name: "site",
  label: "Site",
  prepend: (
    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
      http://
    </span>
  ),
};
