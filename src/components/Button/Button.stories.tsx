import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";

export default {
  title: "components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>Button</Button>;

export const Primary = Template.bind({});
Primary.args = {};
