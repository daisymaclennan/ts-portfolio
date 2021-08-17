import styled from "styled-components";

interface SkillProps {
  image?: string;
  size?: "sm" | "md" | "lg";
}

const Skill = styled.div<SkillProps>`
  background-image: url("/skills/${(props) => props.image}");
  background-size: cover;
  background-position: center;
  box-shadow: 0px 0px 20px 10px rgba(255, 255, 255, 0.25);

  ${(props) =>
    props.size === "sm" &&
    `
    filter: blur(2px);
    z-index: 1;
    border-radius: var(--px11);
    height: var(--px54);
    width: var(--px54);
  `}

  ${(props) =>
    props.size === "md" &&
    `
    filter: blur(1px);
    z-index: 2;
    border-radius: var(--px15);
    height: var(--px86);
    width: var(--px86);
  `}

  ${(props) =>
    props.size === "lg" &&
    `
    z-index: 4;
    border-radius: var(--px21);
    height: var(--px120);
    width: var(--px120);
  `}


  @media (max-width: ${(props) => props.theme.breakpoints.small}) {
    ${(props) =>
      props.size === "sm" &&
      `
      border-radius: var(--px11);
      height: var(--px54);
      width: var(--px54);
    `}

    ${(props) =>
      props.size === "md" &&
      `
      border-radius: var(--px15);
      height: var(--px62);
      width: var(--px62);
    `}

    ${(props) =>
      props.size === "lg" &&
        `
      border-radius: var(--px21);
      height: var(--px86);
      width: var(--px86);
    `}
  }
`;

export default Skill;
