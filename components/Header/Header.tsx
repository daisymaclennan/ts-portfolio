
  import styled from "styled-components"

  interface HeaderProps {
      className?: string;
  }

  const Header = ({ className }: HeaderProps) => {
    return(
        <div className={className}>Hi I'm Header</div>
    )
  };

  const StyledHeader = styled(Header)``;


  export default StyledHeader;
  