import styled from "styled-components";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import SocialIcons from "./SocialIcons";
import Icon from "../Icon";

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  return (
    <header className={className}>
      <ThemeToggle />
      <h1>Daisy Maclennan</h1>
      <SocialIcons>
        <a href="google.com">
          <Icon name="linkedin" />
        </a>
        <a href="google.com">
          <Icon name="github" />
        </a>
      </SocialIcons>
    </header>
  );
};

const StyledHeader = styled(Header)`
  width: calc(100% - 40px);
  position: fixed;
  top: 0;
  left: 20px;
  padding: 40px 0;
  height: 40px;
  display: flex;
  align-items: center;

  > ${ThemeToggle} {
    position: absolute;
    left: 0;
  }

  h1 {
    font-weight: 600;
    font-size: 24px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: ${(props) => props.theme.contrast};
    width: 100%;
  }
`;

export default StyledHeader;
