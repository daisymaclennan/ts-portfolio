module.exports = (componentName) => ({
    content: `
  interface ${componentName}Props {}

  const ${componentName} = ({}: ${componentName}Props) => {
    return(
        <div>Hi I'm ${componentName}</div>
    )
  };

  export default ${componentName};
  `,
    extension: `.tsx`
  });