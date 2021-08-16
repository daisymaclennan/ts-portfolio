import styled from "styled-components";

const SocialIcons = styled.div`
  position: fixed;
  right: 20px;
  display: flex;
  a {
    height: 30px;
    width: 30px;
    svg {
      width: 100%;
      height: 100%;
      stroke: ${(props) => props.theme.contrast};
      fill: ${(props) => props.theme.background};
      transition: 0.25s ease-in;
    }

    &:hover {
      svg {
        fill: ${(props) => props.theme.contrast};
      }
    }

    & + a {
        margin-left: 10px;
    }
  }
`;

export default SocialIcons;
