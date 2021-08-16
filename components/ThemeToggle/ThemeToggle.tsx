import { useContext } from "react";
import styled from "styled-components";
import ThemeToggleButton from "./ThemeToggleButton";
import { Context } from "../../contexts/Context";

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle = ({ className }: ThemeToggleProps) => {
  const [theme, switchTheme] = useContext(Context);
  return (
    <div className={className}>
      <ThemeToggleButton
        onClick={() => switchTheme("dark")}
        mode="dark"
        active={theme === "dark"}
      />
      <ThemeToggleButton
        onClick={() => switchTheme("light")}
        mode="light"
        active={theme === "light"}
      />
    </div>
  );
};

const StyledThemeToggle = styled(ThemeToggle)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90px;

  @media (max-width: var(--bp-small)) {
    flex-direction: column;
    height: 90px;
    width: 40px;
  }
`;

export default StyledThemeToggle;
