import React from "react";
import { Button } from "widgets";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button label="bouton" {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};


export const Large = Template.bind({});
Large.args = {
  full: true,
};

