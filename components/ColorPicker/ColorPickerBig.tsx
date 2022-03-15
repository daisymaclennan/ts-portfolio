import { motion, useDragControls } from "framer-motion";
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
};
interface ColorPickerProps {
  className?: string;
  color: string;
  setColor: (color: string) => void;
}
const ColorPicker = ({ className, color, setColor }: ColorPickerProps) => {
  const constraints = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const [canvasContext, setCanvasContext] = useState<any>(null);
  const dragControls = useDragControls();

  useEffect(() => {
    if (canvas.current) {
      setCanvasContext(canvas.current.getContext("2d"));
      drawColorSpectrum(canvas.current.getContext("2d"), canvas.current);
    }
  }, [canvasContext]);

  const handleColorChange = (relativePos: { x: number; y: number }) => {
    if (canvas.current) {
      const imgData = canvasContext.getImageData(
        (relativePos.x / canvas.current.clientWidth) * canvas.current.width,
        (relativePos.y / canvas.current.clientHeight) * canvas.current.height,
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

  const getRelativePosParent = (e) => {
    if (constraints.current) {
      const parentPos = constraints.current.getBoundingClientRect();

      return { x: e.pageX - parentPos.left, y: e.pageY - parentPos.top };
    }

    return { x: 0, y: 0 };
  };
  return (
    <div className={className} ref={constraints}>
      <motion.button
        drag
        dragConstraints={constraints}
        dragControls={dragControls}
        type="button"
        style={{ backgroundColor: color }}
        onDrag={(e) => {
          handleColorChange(getRelativePosParent(e));
          console.log("relative drag pos", getRelativePosParent(e));
        }}
      />
      <div>
        <canvas
          ref={canvas}
          onClick={(e) => {
            handleColorChange({
              x: e.nativeEvent.offsetX,
              y: e.nativeEvent.offsetY,
            });
            dragControls.start(e, { snapToCursor: true });
          }}
        />
      </div>
    </div>
  );
};
const StyledColorPicker = styled(ColorPicker)`
  position: relative;
  button {
    height: 22px;
    width: 22px;
    border-radius: 11px;
    border: 2px solid white;
    position: absolute;
    z-index: 100;
  }
  div {
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
  }
`;
export default StyledColorPicker;
