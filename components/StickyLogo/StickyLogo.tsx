import styled from "styled-components";

interface StickyLogoProps {
  className?: string;
}

const StickyLogo = ({ className }: StickyLogoProps) => {
  return <div className={className}>Hi I'm StickyLogo</div>;
};

const StyledStickyLogo = styled(StickyLogo)`
  text-align: center;
  position: sticky;
`;

export default StyledStickyLogo;
