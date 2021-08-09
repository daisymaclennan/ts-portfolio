
  import { ComponentStory, ComponentMeta } from "@storybook/react";
  import ThemeToggle from "./ThemeToggle";

  export default {
    title: "ThemeToggle",
    component: ThemeToggle,
  } as ComponentMeta<typeof ThemeToggle>;

  const Template: ComponentStory<typeof ThemeToggle> = (args) => <ThemeToggle {...args} />;

  export const ThemeToggleStory = Template.bind({});

  