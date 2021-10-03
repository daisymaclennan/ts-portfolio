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
      <div>
        <ThemeToggle />
        <h1>
          Daisy <span>Maclennan</span>
        </h1>
        <SocialIcons>
          <a href="https://www.linkedin.com/in/daisy-maclennan/">
            <Icon name="linkedin" />
          </a>
          <a href="https://github.com/daisymaclennan">
            <Icon name="github" />
          </a>
        </SocialIcons>
      </div>
    </header>
  );
};

interface StyledHeaderProps {
  isScrolled?: boolean;
}

const StyledHeader = styled(Header)<StyledHeaderProps>`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  transition: var(--transition);

  > div {
    width: calc(100% - var(--px40));
    padding: var(--px40) 0;
    height: var(--px40);
    display: flex;
    align-items: center;
    position: relative;
    margin: 0 auto;
    transition: var(--transition);
  }

  ${(props) =>
    props.isScrolled &&
    `
    background: ${props.theme.background};

    > div {
      padding: var(--px21) 0;
    }
  `}

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

    @media (max-width: ${(props) => props.theme.breakpoints.xSmall}) {
      font-size: var(--px18);
    }

    @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
      span {
        display: none;
      }
    }
  }
`;

export default StyledHeader;
