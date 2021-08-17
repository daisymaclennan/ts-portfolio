
  import { ComponentStory, ComponentMeta } from "@storybook/react";
  import SkillRocket from "./SkillRocket";

  export default {
    title: "SkillRocket",
    component: SkillRocket,
  } as ComponentMeta<typeof SkillRocket>;

  const Template: ComponentStory<typeof SkillRocket> = (args) => <SkillRocket {...args} />;

  export const SkillRocketStory = Template.bind({});

  