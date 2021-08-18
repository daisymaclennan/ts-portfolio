import styled from "styled-components";

const Projects = styled.div`
  padding: var(--px148) 0;

  @media (max-width: ${(props) => props.theme.breakpoints.small}) {
    padding: var(--px40) 0;
  }
`;

export default Projects;
