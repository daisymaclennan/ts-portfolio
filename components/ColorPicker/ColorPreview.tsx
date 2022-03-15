import styled from "styled-components";

interface ColorPreviewProps {
  color: string;
}

const ColorPreview = styled.div<ColorPreviewProps>`
  height: 200px;
  width: 200px;
  background-color: ${props => props.color};
`;

export default ColorPreview;
