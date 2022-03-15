import { useRef } from "react";
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
  const constraints = useRef<HTMLDivElement>(null);
  return (
    <div className={className} ref={constraints}>
      <input
        type="range"
        min={0}
        max={1}
        step={0.05}
        value={color.array[3]}
        onChange={(e) =>
          setColor({
            actual: `rgba(${color.array[0]}, ${color.array[1]}, ${color.array[2]}, ${e.target.value})`,
            array: [
              color.array[0],
              color.array[1],
              color.array[2],
              e.target.value,
            ],
          })
        }
        aria-label="Max users needed"
      />
    </div>
  );
};

const StyledColorPickerOpacity = styled(ColorPickerOpacity)`
  margin: 2rem 0;
  height: 60px;
  background: white;
  border-radius: 20px;
  position: relative;
  background-image: url("https://static.vecteezy.com/system/resources/previews/003/793/482/large_2x/transparent-grid-pattern-for-background-vector.jpg");
  background-size: cover;

  button {
    height: 60px;
    width: 60px;
    border-radius: 30px;
    transform: scale(1.2);
    border: none;
    background: white;
    box-shadow: 0 0 1rem 0.4rem rgba(0, 0, 0, 0.15);
    cursor: pointer;
    position: relative;
    z-index: 100;
  }

  input[type="range"] {
    -webkit-appearance: none;
    background: transparent;
    width: 100%;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      border: none;
      width: 3.1rem;
      height: 1.3rem;
      border-radius: 999px;
      background-color: pink;
      cursor: grab;
      margin-top: -0.4rem;
      background-image: url("data:image/svg+xml,%0A%3Csvg width='133' height='57' viewBox='0 0 133 57' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M32 23L38 29L44 23L46 25L38 33L30 25L32 23Z' fill='black'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M27.999 0H105C120.463 0 132.999 12.536 132.999 28V29C132.999 44.463 120.463 57 105 57H27.999C12.536 57 0 44.463 0 29V28C0 12.536 12.536 0 27.999 0Z' fill='%23FB6664'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M44 16.75L32.6 28L44 39.25L40.2 43L25 28L40.2 13L44 16.75Z' fill='white'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M89 16.75L100.4 28L89 39.25L92.8 43L108 28L92.8 13L89 16.75Z' fill='white'/%3E%3C/svg%3E%0A");
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }

    &::-moz-range-thumb {
      -webkit-appearance: none;
      border: none;
      width: 3.1rem;
      height: 1.3rem;
      border-radius: 999px;
      background-color: pink;
      cursor: grab;
      margin-top: -0.4rem;
      background-image: url("data:image/svg+xml,%0A%3Csvg width='133' height='57' viewBox='0 0 133 57' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M32 23L38 29L44 23L46 25L38 33L30 25L32 23Z' fill='black'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M27.999 0H105C120.463 0 132.999 12.536 132.999 28V29C132.999 44.463 120.463 57 105 57H27.999C12.536 57 0 44.463 0 29V28C0 12.536 12.536 0 27.999 0Z' fill='%23FB6664'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M44 16.75L32.6 28L44 39.25L40.2 43L25 28L40.2 13L44 16.75Z' fill='white'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M89 16.75L100.4 28L89 39.25L92.8 43L108 28L92.8 13L89 16.75Z' fill='white'/%3E%3C/svg%3E%0A");
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }

    &::-webkit-slider-runnable-track {
      width: 100%;
      height: 0.5rem;
      background: white;
      border-radius: 999px;
    }

    &::-moz-range-track {
      width: 100%;
      height: 0.5rem;
      background: white;
      border-radius: 999px;
    }
  }
`;

export default StyledColorPickerOpacity;
