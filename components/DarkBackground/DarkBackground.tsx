import Star from "./Star";

interface DarkBackgroundProps {
  className?: string;
}

const DarkBackground = ({ className }: DarkBackgroundProps) => {
  return (
    <div className={className}>
      {Array.from(Array(200).keys()).map((num, i) => {
        return <Star key={num} i={i} />;
      })}

      {Array.from(Array(50).keys()).map((num, i) => {
        return <Star key={num} size="md" i={i + 200} />;
      })}

      {Array.from(Array(20).keys()).map((num, i) => {
        return <Star key={num} size="lg" i={i + 250} />;
      })}
    </div>
  );
};

export default DarkBackground;
