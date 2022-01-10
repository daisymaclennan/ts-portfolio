import styled from "styled-components";
import { useLayoutEffect, useRef, useState } from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { contentContainer } from "../../theme/mixins";
import Moon from "./Moon";

interface MoonTextProps {
  className?: string;
}

const MoonText = ({ className }: MoonTextProps) => {
  const oneRef = useRef<HTMLHeadingElement>(null);
  const twoRef = useRef<HTMLHeadingElement>(null);
  const [widths, setWidths] = useState<{ one: number; two: number }>({
    one: 0,
    two: 0,
  });
  const { scrollY } = useViewportScroll();
  const one = useTransform(scrollY, [0, widths.one], ["-5%", "-105%"]);
  const two = useTransform(scrollY, [0, widths.two], ["10%", "110%"]);

  useLayoutEffect(() => {
    const getWidths = () => {
      setWidths({
        one: oneRef.current?.clientWidth || widths.one,
        two: twoRef.current?.clientWidth || widths.two,
      });
    };
    getWidths();
    document.addEventListener("resize", getWidths);
    return () => document.removeEventListener("resize", getWidths);
  }, [oneRef, twoRef]);
  return (
    <div className={className}>
      <div>
        <div>
          <motion.h2 ref={oneRef} style={{ x: one }}>
            Daisy
          </motion.h2>
          <motion.h2 ref={twoRef} style={{ x: two }}>
            Maclennan
          </motion.h2>
        </div>
        <div>
          <motion.h2 style={{ x: one }}>Daisy</motion.h2>
          <motion.h2 style={{ x: two }}>Maclennan</motion.h2>
        </div>

        <Moon />
      </div>
    </div>
  );
};

const StyledMoonText = styled(MoonText)`
  ${contentContainer}
  position: relative;
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    margin: var(--px54) auto;
  }
  > div {
    width: 100%;
    padding-top: 100%;
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
        font-size: var(--px400);
        font-weight: bold;
        color: ${(props) => props.theme.contrast};
        transition: color var(--transition);

        @media (max-width: ${(props) => props.theme.breakpoints.large}) {
          font-size: var(--px300);
        }

        @media (max-width: ${(props) => props.theme.breakpoints.medium}) {
          font-size: var(--px250);
        }

        @media (max-width: ${(props) => props.theme.breakpoints.small}) {
          font-size: var(--px200);
        }

        @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
          font-size: var(--px148);
        }

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
  }
`;

export default StyledMoonText;
