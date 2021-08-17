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
      <h1>Daisy <span>Maclennan</span></h1>
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
  width: calc(100% - var(--px40));
  position: fixed;
  z-index: 999;
  top: 0;
  left: calc(var(--px40) / 2);
  padding: var(--px40) 0;
  height: var(--px40);
  display: flex;
  align-items: center;

  > ${ThemeToggle} {
    position: absolute;
    left: 0;
  }

  h1 {
    font-weight: 600;
    font-size: var(--px23);
    text-align: center;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: ${(props) => props.theme.contrast};
    width: 100%;
    transition: color var(--transition);

    @media (max-width: ${props => props.theme.breakpoints.xSmall}) {
      font-size: var(--px18);
    }

    @media (max-width: ${props => props.theme.breakpoints.mobile}) {
      span {
        display: none;
      }
    }
  }
`;

export default StyledHeader;
