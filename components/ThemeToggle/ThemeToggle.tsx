import { useContext } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import ThemeToggleButton from "./ThemeToggleButton";
import { Context } from "../../contexts/Context";

interface ThemeToggleProps {
  className?: string;
}

const variants = {
  right: {
    left: '50%',
  },
  left: {
    left: 0,
  },
};

const ThemeToggle = ({ className }: ThemeToggleProps) => {
  const [theme, switchTheme] = useContext(Context);
  return (
    <div className={className}>
      <motion.span variants={variants} animate={theme.name === 'dark' ? 'left' : 'right'} initial={theme.name === 'dark' ? 'left' : 'right'} />
      <ThemeToggleButton onClick={() => switchTheme("dark")} mode="dark" active={theme.name === 'dark'} />
      <ThemeToggleButton onClick={() => switchTheme("light")} mode="light" active={theme.name === 'light'} />
    </div>
  );
};

const StyledThemeToggle = styled(ThemeToggle)`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(var(--px40) * 2);
  background: #F1FAEE;
  border-radius: calc(var(--px40) / 2);

  span {
    position: absolute;
    width: var(--px40);
    height: 100%;
    border-radius: calc(var(--px40) / 2);
    background: #E63946;
    z-index: 1;
    box-shadow: rgb(0 0 0 / 15%) 0px 0px 1rem 0.4rem;
  }
`;

export default StyledThemeToggle;
