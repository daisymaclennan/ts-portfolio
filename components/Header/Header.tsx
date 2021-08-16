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
  width: 80%;
  position: fixed;
  top: 0;
  left: 10%;
  padding: 100px 0;
`;

export default StyledHeader;
