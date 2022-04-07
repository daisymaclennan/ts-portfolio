import styled from "styled-components";
import { contentContainer } from "../theme/mixins";

const ContentWrapper = styled.div`
  ${contentContainer}
  position: relative;
  z-index: 400;
`;

export default ContentWrapper;
