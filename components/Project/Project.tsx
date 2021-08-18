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
        {github && (
          <ProjectButton icon="github" href={github} text="View on GitHub" />
        )}
        {play && (
          <ProjectButton icon="play" href={play} text="Play on Itch.io" />
        )}
        {live && <ProjectButton icon="eye" href={live} text="See the site" />}
        {design && (
          <ProjectButton icon="figma" href={design} text="View in Figma" />
        )}
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

    @media (max-width: ${(props) => props.theme.breakpoints.large}) {
      font-size: var(--px62);
    }

    @media (max-width: ${(props) => props.theme.breakpoints.medium}) {
      font-size: var(--px40);
    }

    @media (max-width: ${(props) => props.theme.breakpoints.small}) {
      font-size: var(--px34);
    }
  }
  > div {
    display: flex;
    > * + * {
      margin-left: 0.5rem;
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: flex-start;
    margin: var(--px40) auto;
    h4 {
      margin: var(--px15) 0;
    }

    > div {
      margin-left: auto;
    }
  }
`;

export default StyledProject;
