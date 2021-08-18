import styled from "styled-components";
import { contentContainerSmall } from "../../theme/mixins";

interface IntroTextProps {
  className?: string;
  text: string;
}

const IntroText = ({ className, text }: IntroTextProps) => {
  return (
    <div className={className}>
      <h3>{text}</h3>
    </div>
  );
};

const StyledIntroText = styled(IntroText)`
  ${contentContainerSmall}
  margin: var(--px300) auto;
  h3 {
    font-size: var(--px86);
    font-weight: 600;
    color: ${(props) => props.theme.contrast};
    text-align: center;
    line-height: 110%;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    margin: var(--px200) auto;

    h3 {
      font-size: var(--px54);
    }
  }
`;

export default StyledIntroText;
