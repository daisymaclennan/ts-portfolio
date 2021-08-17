import styled from "styled-components";
import { contentContainer } from "../../theme/mixins";
import Icon from "../Icon";

interface ProjectProps {
  className?: string;
  name?: string;
}

const Project = ({ className, name }: ProjectProps) => {
  return (
    <div className={className}>
      <h4>{name}</h4>
      <div>
        <button>
          <Icon name="github" />
        </button>
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
