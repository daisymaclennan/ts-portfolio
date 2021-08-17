import styled from "styled-components";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface StarProps {
  className?: string;
  i?: number;
}

const Star = ({ className, i }: StarProps) => {
  const [pos, setPos] = useState([0, 0]);

  useEffect(() => {
    const resize = () => {
      setPos([
        Math.floor(Math.random() * (window.innerHeight * 2)),
        Math.floor(Math.random() * window.innerWidth),
      ]);
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);
  return (
    <motion.figure className={className} style={{ x: pos[0], y: pos[1] }} />
  );
};

interface StyledStarProps {
  size?: string;
}

const StyledStar = styled(Star)<StyledStarProps>`
  position: fixed;
  height: 1px;
  width: 1px;
  background: white;
  box-shadow: 0px 0px 5px rgba(255, 255, 255, 0.5);

  ${(props) =>
    props.size === "md" &&
    `
      width: 2px;
      height: 2px;
      border-radius: 2px;
    `}

  ${(props) =>
    props.size === "lg" &&
    `
      width: 4px;
      height: 4px;
      border-radius: 2px;
    `}
`;

export default StyledStar;
