import styled from "styled-components";
import { contentContainer } from "../../theme/mixins";
import ProjectButton from "./ProjectButton";

interface ProjectProps {
  className?: string;
  name?: string;
  github?: string;
  play?: string;
  live?: string;
  design?: string;
}

const Project = ({
  className,
  name,
  github,
  play,
  live,
  design,
}: ProjectProps) => {
  return (
    <div className={className}>
      <h4>{name}</h4>
      <div>
        {github && <ProjectButton icon="github" href={github} />}
        {play && <ProjectButton icon="play" href={play} />}
        {live && <ProjectButton icon="eye" href={live} />}
        {design && <ProjectButton icon="figma" href={design} />}
      </div>
    </div>
  );
};

const StyledProject = styled(Project)`
  ${contentContainer}
  display: flex;
  align-items: center;
  justify-content: space-between;
  h4 {
    font-size: var(--px86);
    color: ${(props) => props.theme.contrast};
    margin: var(--px40) 0;
  }
  button {
    cursor: pointer;
    background: #e63946;
    border: none;
    height: var(--px62);
    width: var(--px62);
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition);
    svg {
      fill: white;
      height: var(--px40);
    }

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export default StyledProject;
