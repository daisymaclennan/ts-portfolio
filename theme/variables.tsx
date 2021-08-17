import { css } from "styled-components";

const variables = css`
  :root {
    // Breakpoints
    --bp-mobile: 450px;
    --bp-xsmall: 600px;
    --bp-small: 750px;
    --bp-medium: 1000px;
    --bp-large: 1200px;
    --bp-xlarge: 1400px;
    --bp-huge: 1900px;

    // Z Indexes
    --z-hidden: -999;
    --z-behind: -1;
    --z-default: 1;
    --z-overlay: 400;
    --z-modal: 500;
    --z-globalui: 600;
    --z-important: 999;

    // Fonts
    --f-primary: "Josefin Sans", sans-serif;
    --f-secondary: "secondary-font";

    // Presets
    --max-width: 1200px;
    --small-max-width: 1000px;
    --big-max-width: 1400px;

    // Pixel to REM
    --px11: 0.55rem;
    --px15: 0.75rem;
    --px18: 0.9rem;
    --px21: 1.05rem;
    --px23: 1.15rem;
    --px26: 1.3rem;
    --px34: 1.7rem;
    --px40: 2rem;
    --px54: 2.7rem;
    --px62: 3.1rem;
    --px86: 4.3rem;
    --px120: 6rem;
    --px148: 7.4rem;
    --px200: 10rem;
    --px250: 12.5rem;
    --px300: 17.5rem;

    // Transition
    --transition: 0.25s ease-in;
  }
`;

export default variables;
