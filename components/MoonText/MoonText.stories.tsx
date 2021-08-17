
  import { ComponentStory, ComponentMeta } from "@storybook/react";
  import MoonText from "./MoonText";

  export default {
    title: "MoonText",
    component: MoonText,
  } as ComponentMeta<typeof MoonText>;

  const Template: ComponentStory<typeof MoonText> = (args) => <MoonText {...args} />;

  export const MoonTextStory = Template.bind({});

  