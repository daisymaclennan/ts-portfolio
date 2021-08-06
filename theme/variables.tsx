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
    --f-primary: 'primary-font';
    --f-secondary: 'secondary-font';

    // Presets
    --max-width: 1200px;
    --small-max-width: 1000px;
    --big-max-width: 1400px;
}
`;

export default variables;