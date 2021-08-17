
  import { ComponentStory, ComponentMeta } from "@storybook/react";
  import IntroText from "./IntroText";

  export default {
    title: "IntroText",
    component: IntroText,
  } as ComponentMeta<typeof IntroText>;

  const Template: ComponentStory<typeof IntroText> = (args) => <IntroText {...args} />;

  export const IntroTextStory = Template.bind({});

  