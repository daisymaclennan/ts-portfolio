import styled from "styled-components";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  return (
    <header className={className}>
      <ThemeToggle />
    </header>
  );
};

const StyledHeader = styled(Header)`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;

export default StyledHeader;
