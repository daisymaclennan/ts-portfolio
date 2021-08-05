module.exports = (componentName) => ({
  content: `
  import { ComponentStory, ComponentMeta } from "@storybook/react";
  import ${componentName} from "./${componentName}";

  export default {
    title: "${componentName}",
    component: ${componentName},
  } as ComponentMeta<typeof ${componentName}>;

  const Template: ComponentStory<typeof ${componentName}> = (args) => <${componentName} {...args} />;

  export const ${componentName}Story = Template.bind({});

  `,
  extension: `.stories.tsx`,
});
