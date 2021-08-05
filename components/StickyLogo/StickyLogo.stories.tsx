import { Story, Meta } from "@storybook/react";
import StickyLogo from "./StickyLogo";

export default {
  title: "StickyLogo",
  component: StickyLogo,
} as Meta<typeof StickyLogo>;

const Template: Story<typeof StickyLogo> = (args) => <StickyLogo {...args} />;

export const StickyLogoStory = Template.bind({});
