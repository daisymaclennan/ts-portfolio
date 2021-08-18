import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Icon from "../Icon";
import { verticalCenter } from "../../theme/mixins";

export interface ProjectButtonProps {
  className?: string;
  icon: string;
  text: string;
  href: string;
  i?: number;
}

const ProjectButton = ({
  className,
  icon,
  text,
  href,
  i = 1,
}: ProjectButtonProps) => {
  const textRef = useRef<HTMLElement | null>(null);
  const [width, setWidth] = useState<number>(0);
  const [hover, setHover] = useState<boolean>(false);

  useEffect(() => {
    if (textRef.current) {
      setWidth(textRef.current.getBoundingClientRect().width + 45);
    }
  }, []);
  return (
    <a
      className={className}
      href={href}
      type="button"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ width: `${hover ? `${width}px` : `2.2em`}` }}
    >
      <Icon name={icon} />
      <span ref={textRef}>{text}</span>
    </a>
  );
};

interface StyledProjectButtonProps {
  colorMode?: "light" | "dark";
}

const StyledProjectButton = styled(ProjectButton)<StyledProjectButtonProps>`
  cursor: pointer;
  width: 2.2em;
  position: relative;
  height: 2.2em;
  line-height: 2.2em;
  margin-bottom: 0.5em;
  border-radius: 2.2em;
  overflow: hidden;
  user-select: none;
  font-weight: 400;
  display: block;
  z-index: 0;
  background: ${(props) => props.theme.contrast};
  transition: var(--transition);
  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    right: 0;
  }

  span {
    ${verticalCenter}
    transition: var(--transition);
    font-size: 0.8em;
    left: 2.8em;
    font-weight: 600;
    white-space: nowrap;
    opacity: 0;
  }

  svg {
    ${verticalCenter}
    transition: var(--transition);
    width: 2.2em;
    height: 2.2em;
    margin: 0;
    background: transparent;
    display: inline-block;
    left: 0;
    top: 0;
    transform: scale(0.5);
    * {
      fill: #e63946;
    }
  }

  &:hover {
    height: 2.2em;
    line-height: 2.2em;
    margin-bottom: 0.5em;
    border-radius: 2.2em;
    background-color: #e63946;
    color: ${(props) => props.theme.contrast};
    span {
      opacity: 1;
    }
    svg {
      * {
        fill: ${(props) => props.theme.contrast};
      }
    }
  }
`;

export default StyledProjectButton;
