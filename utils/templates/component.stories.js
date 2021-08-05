module.exports = (componentName) => ({
  content: `
  import ${componentName} from "./${componentName}";

  export default {
      title: "${componentName}"
  };
  
  export const ${componentName}Story = () => <${componentName} />;
  `,
  extension: `.stories.tsx`,
});
