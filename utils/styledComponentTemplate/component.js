module.exports = (componentName) => ({
    content: `
  import styled from "styled-components"

  interface ${componentName}Props {
      className?: string;
  }

  const ${componentName} = ({ className }: ${componentName}Props) => {
    return(
        <div className={className}>Hi I'm ${componentName}</div>
    )
  };

  const Styled${componentName} = styled(${componentName})\`\`;


  export default Styled${componentName};
  `,
    extension: `.tsx`
  });