import styled from "styled-components";
import ThemeToggleButton from "./ThemeToggleButton";

interface ThemeToggleProps {
  className?: string;
  currentTheme: "dark" | "light";
  switchTheme: (newTheme: "dark" | "light") => void;
}

const ThemeToggle = ({
  className,
  currentTheme,
  switchTheme,
}: ThemeToggleProps) => {
  return (
    <div className={className}>
      <ThemeToggleButton
        onClick={() => switchTheme("dark")}
        mode="dark"
        active={currentTheme === "dark"}
      />
      <ThemeToggleButton
        onClick={() => switchTheme("light")}
        mode="light"
        active={currentTheme === "light"}
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
