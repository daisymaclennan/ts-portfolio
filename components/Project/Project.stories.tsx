
  import { ComponentStory, ComponentMeta } from "@storybook/react";
  import Project from "./Project";

  export default {
    title: "Project",
    component: Project,
  } as ComponentMeta<typeof Project>;

  const Template: ComponentStory<typeof Project> = (args) => <Project {...args} />;

  export const ProjectStory = Template.bind({});

  