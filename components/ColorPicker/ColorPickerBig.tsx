import { MouseEvent, useEffect, useRef, useState } from "react";
import styled from "styled-components";
interface ColorPickerProps {
  className?: string;
  setColor: (color: string) => void;
}
const ColorPicker = ({ className, setColor }: ColorPickerProps) => {
  const canvas = useRef<HTMLCanvasElement>(null);
  const [canvasContext, setCanvasContext] = useState<any>(null);
  useEffect(() => {
    if (canvas.current) {
      setCanvasContext(canvas.current.getContext("2d"));
      const canvasImage = new Image(500, 500);
      canvasImage.onload = () =>
        canvasContext?.drawImage(
          canvasImage,
          0,
          0,
          canvasImage.width,
          canvasImage.height
        );
      canvasImage.src = "/light-color-spectrum.png";
    }
  }, [canvasContext]);
  const handleColorChange = (e: MouseEvent<HTMLCanvasElement>) => {
    console.log(e);
    if (canvas.current) {
      const imgData = canvasContext.getImageData(
        (e.nativeEvent.offsetX / canvas.current.clientWidth) *
          canvas.current.width,
        (e.nativeEvent.offsetY / canvas.current.clientHeight) *
          canvas.current.height,
        1,
        1
      );
      const rgba = imgData.data;
      setColor(
        "rgba(" +
          rgba[0] +
          ", " +
          rgba[1] +
          ", " +
          rgba[2] +
          ", " +
          rgba[3] +
          ")"
      );
    }
  };
  return (
    <div className={className}>
      <canvas ref={canvas} onClick={(e) => handleColorChange(e)} />
    </div>
  );
};
const StyledColorPicker = styled(ColorPicker)`
  height: 0;
  padding-top: calc(867 / 1282 * 100%);
  background: white;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  canvas {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;
export default StyledColorPicker;
