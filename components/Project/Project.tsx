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
        {github && <ProjectButton icon="github" href={github} text='View on GitHub' />}
        {play && <ProjectButton icon="play" href={play} text='Play on Itch.io' />}
        {live && <ProjectButton icon="eye" href={live} text='See the site' />}
        {design && <ProjectButton icon="figma" href={design} text='View in Figma' />}
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
  > div {
    display: flex;
    > * + * {
      margin-left: 0.5rem;
    }
  }
`;

export default StyledProject;
