import { useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Head from "next/head";
import { Reset } from "styled-reset";
import darkTheme from "../../theme/darkTheme";
import lightTheme from "../../theme/darkTheme";

type ThemeType = typeof darkTheme;

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
    body{
        background: ${(props) => props.theme.background};
    }
    body, *{
        font-family: var(--f-primary);
    }
`;

interface GlobalLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const GlobalLayout = ({ children, className }: GlobalLayoutProps) => {
  const [theme, changeTheme] = useState<ThemeType>(darkTheme);
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/oxe5smk.css" />
      </Head>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default GlobalLayout;
