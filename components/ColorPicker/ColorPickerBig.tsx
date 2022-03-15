import { MouseEvent, useEffect, useRef, useState } from "react";
import styled from "styled-components";

const drawColorSpectrum = (canvasContext, canvas) => {
    let gradient = canvasContext.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop(0, "#ff0000");
    gradient.addColorStop(1 / 6, "#ffff00");
    gradient.addColorStop((1 / 6) * 2, "#00ff00");
    gradient.addColorStop((1 / 6) * 3, "#00ffff");
    gradient.addColorStop((1 / 6) * 4, "#0000ff");
    gradient.addColorStop((1 / 6) * 5, "#ff00ff");
    gradient.addColorStop(1, "#ff0000");
    canvasContext.fillStyle = gradient;
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);

    gradient = canvasContext.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
    gradient.addColorStop(0.5, "rgba(255, 255, 255, 0)");
    gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
    canvasContext.fillStyle = gradient;
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);

    gradient = canvasContext.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, "rgba(0, 0, 0, 0)");
    gradient.addColorStop(0.5, "rgba(0, 0, 0, 0)");
    gradient.addColorStop(1, "rgba(0, 0, 0, 1)");
    canvasContext.fillStyle = gradient;
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);
}
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
      drawColorSpectrum(canvas.current.getContext("2d"), canvas.current);
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
