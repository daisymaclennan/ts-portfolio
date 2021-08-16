import styled from "styled-components";
import lightTheme from "../../theme/lightTheme";
import darkTheme from "../../theme/darkTheme";
import Icon from "../Icon";

interface ThemeToggleButtonProps {
  className?: string;
  onClick: () => void;
  mode: 'dark' | 'light';
}

const ThemeToggleButton = ({ className, onClick, mode }: ThemeToggleButtonProps) => {
  return (
    <button className={className} onClick={onClick}>
      {mode === "dark" && <Icon name="moon" />}
      {mode === "light" && <Icon name="sun" />}
    </button>
  );
};

interface StyledThemeToggleButtonProps {
  active?: boolean;
}

const StyledThemeToggleButton = styled(ThemeToggleButton)<StyledThemeToggleButtonProps>`
  border: none;
  height: 40px;
  width: 40px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.25s ease-in-out;
  background: transparent;
  position: relative;
  z-index: 2;

  svg {
    fill: white;
    width: 20px;
  }

  ${(props) =>
    !props.active &&
    `
    cursor: pointer;
    svg {
      fill: #b9b9b9;
    }
  `}
`;

export default StyledThemeToggleButton;
