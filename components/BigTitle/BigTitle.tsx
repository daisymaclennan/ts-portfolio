import styled from "styled-components";

const BigTitle = styled.h2`
  font-size: 24.5vw;
  font-weight: bold;
  color: ${(props) => props.theme.contrast};
  transition: color var(--transition);
  white-space: nowrap;
`;

export default BigTitle;
