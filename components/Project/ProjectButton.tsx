import styled from "styled-components";
import { contentContainer } from "../../theme/mixins";
import Icon from "../Icon";

interface ProjectButtonProps {
  className?: string;
  icon: string;
  href?: string;
}

const ProjectButton = ({ className, icon, href }: ProjectButtonProps) => {
  return (
    <a className={className} href={href}>
      <Icon name={icon} />
    </a>
  );
};

const StyledProjectButton = styled(ProjectButton)`
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
`;

export default StyledProjectButton;
