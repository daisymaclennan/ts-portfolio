import styled from "styled-components";
import { useRef } from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { contentContainer } from "../../theme/mixins";
import Moon from "./Moon";

interface MoonTextProps {
  className?: string;
}

const MoonText = ({ className }: MoonTextProps) => {
  const { scrollY } = useViewportScroll();
  const one = useTransform(scrollY, [0, 600], ["-5vw", "-85vw"]);
  const two = useTransform(scrollY, [0, 600], ["10vw", "90vw"]);
  return (
    <div className={className}>
      <div>
        <motion.h2 style={{ x: one }}>Daisy</motion.h2>
        <motion.h2 style={{ x: two }}>Maclennan</motion.h2>
      </div>
      <div>
        <motion.h2 style={{ x: one }}>Daisy</motion.h2>
        <motion.h2 style={{ x: two }}>Maclennan</motion.h2>
      </div>

      <Moon />
    </div>
  );
};

const StyledMoonText = styled(MoonText)`
  ${contentContainer}
  position: relative;
  // Makes it a square
  padding-top: 80%;
  div {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    > h2 {
      font-size: 30vw;
      font-weight: bold;
      color: ${(props) => props.theme.contrast};
      transition: color var(--transition);

      &:nth-of-type(1) {
        top: 0;
      }

      &:nth-of-type(2) {
        top: var(--px300);
      }
    }

    &:last-of-type {
      z-index: 3;
      mask: url("/moon.svg");
      mask-size: 100%;
      > h2 {
        color: ${(props) => props.theme.background};
      }
    }
  }

  svg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 2;
  }
`;

export default StyledMoonText;
