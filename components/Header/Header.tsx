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
  width: calc(100% - 40px);
  position: fixed;
  top: 0;
  left: 20px;
  padding: 40px 0;
`;

export default StyledHeader;
