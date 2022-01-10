import styled from "styled-components";

const SocialIcons = styled.div`
  position: fixed;
  right: calc(var(--px40) / 2);
  display: flex;
  a {
    height: var(--px34);
    width: var(--px34);
    svg {
      width: 100%;
      height: 100%;
      stroke: ${(props) => props.theme.contrast};
      fill: transparent;
      transition: fill var(--transition);
    }

    &:hover {
      svg {
        fill: ${(props) => props.theme.contrast};
      }
    }

    &:first-of-type {
      transform: rotate(90deg);
      &:hover {
        transition: transform var(--transition);
        transform: rotate(90deg) translateX(2px);
        svg {
          fill: none;
        }
      }
    }

    & + a {
      margin-left: var(--px11);
    }
  }
`;

export default SocialIcons;
