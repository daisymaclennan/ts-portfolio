import { motion } from "framer-motion";
import styled from "styled-components";

interface ColorPickerOpacityProps {
  className?: string;
  color: { actual: string; array: number[] };
  setColor: (color: { actual: string; array: number[] }) => void;
}

const ColorPickerOpacity = ({
  className,
  color,
  setColor,
}: ColorPickerOpacityProps) => {
  return (
    <div className={className}>
      <motion.button type="button" />
      <div />
    </div>
  );
};

const StyledColorPickerOpacity = styled(ColorPickerOpacity)`
  margin: 2rem 0;
  height: 60px;
  background: white;
  border-radius: 20px;
  position: relative;
  background-image: url('https://static.vecteezy.com/system/resources/previews/003/793/482/large_2x/transparent-grid-pattern-for-background-vector.jpg');
  background-size: cover;

  button {
    height: 60px;
    width: 60px;
    border-radius: 30px;
    transform: scale(1.2);
    border: none;
    background: white;
    box-shadow: 0 0 1rem 0.4rem rgba(0, 0, 0, 0.15);
  }

  div {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border-radius: 20px;
    background: linear-gradient(
      to right,
      ${(props) =>
        props.color &&
        `rgba(${props.color.array[0]}, ${props.color.array[1]}, ${props.color.array[2]}, 0), rgba(${props.color.array[0]}, ${props.color.array[1]}, ${props.color.array[2]}, 1)`}
    );
  }
`;

export default StyledColorPickerOpacity;
