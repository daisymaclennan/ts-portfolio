import { motion, useTransform, useViewportScroll } from "framer-motion";
import { useEffect, useLayoutEffect, useState } from "react";
import styled from "styled-components";
import Star from "./Star";

interface DarkBackgroundProps {
  className?: string;
}

const DarkBackground = ({ className }: DarkBackgroundProps) => {
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 6000], [0, 150]);
  const y2 = useTransform(scrollY, [0, 6000], [0, -150]);
  const y3 = useTransform(scrollY, [0, 6000], [0, 100]);
  return (
    <div className={className}>
      <motion.div style={{ y: y1 }}>
        {Array.from(Array(200).keys()).map((num, i) => {
          return <Star key={num} i={i} />;
        })}
      </motion.div>
      <motion.div style={{ y: y2 }}>
        {Array.from(Array(50).keys()).map((num, i) => {
          return <Star key={num} size="md" i={i + 200} />;
        })}
      </motion.div>

      <motion.div style={{ y: y3 }}>
        {Array.from(Array(20).keys()).map((num, i) => {
          return <Star key={num} size="lg" i={i + 250} />;
        })}
      </motion.div>
    </div>
  );
};

const StyledDarkBackground = styled(DarkBackground)`
  height: 100vh;
  width: 100vw;
  position: fixed;
`;

export default StyledDarkBackground;
