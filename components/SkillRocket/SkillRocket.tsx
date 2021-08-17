import styled from "styled-components";
import { contentContainer } from "../../theme/mixins";
import Rocket from "./Rocket";
import Skill from "./Skill";

interface SkillRocketProps {
  className?: string;
  skills: {
    sm: string[];
    md: string[];
    lg: string[];
  };
}

const SkillRocket = ({ className, skills }: SkillRocketProps) => {
  return (
    <div className={className}>
      <div>
        <Rocket />
        {skills.sm.map((skill) => (
          <Skill key={skill} size="sm" image={skill} />
        ))}
        {skills.md.map((skill) => (
          <Skill key={skill} size="md" image={skill} />
        ))}
        {skills.lg.map((skill) => (
          <Skill key={skill} size="lg" image={skill} />
        ))}
      </div>
    </div>
  );
};

const StyledSkillRocket = styled(SkillRocket)`
  ${contentContainer}
  > div {
    margin: var(--px148) 0;
    position: relative;

    svg {
      width: 100%;
    }

    ${Skill} {
      position: absolute;
      &:nth-of-type(1) {
        top: 30%;
        left: 6%;
      }
      &:nth-of-type(2) {
        top: 14%;
        left: 90%;
      }
      &:nth-of-type(3) {
        top: 0;
        left: 40%;
      }
      &:nth-of-type(4) {
        top: 48%;
        left: 100%;
      }
      &:nth-of-type(5) {
        top: 10%;
        left: 10%;
      }
      &:nth-of-type(6) {
        top: 30%;
        left: 90%;
      }
      &:nth-of-type(7) {
        top: 5%;
        left: 70%;
      }
      &:nth-of-type(8) {
        top: 50%;
        left: 0;
      }
    }
  }
`;

export default StyledSkillRocket;
