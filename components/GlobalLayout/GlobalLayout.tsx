/* eslint-disable @next/next/no-page-custom-font */
import { createGlobalStyle } from "styled-components";
import Head from "next/head";
import { Reset } from "styled-reset";
import variables from "../../theme/variables";
import { ThemeType } from "../../types";
import ThemeHandler from "./ThemeHandler";
import Header from "../Header/Header";

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
    ${variables}
    html {
      font-size: clamp(16px, calc(1rem + (20 - 16) * ((100vw - var(--bp-mobile)) / (var(--max-width) - var(--bp-mobile)))), 20px);
      min-height: 1vw;
    }
    body{
        background: ${(props) => props.theme.background};
    }
    body, *{
        font-family: var(--f-primary);
    }
`;

interface GlobalLayoutProps {
  children: React.ReactNode;
}

const GlobalLayout = ({ children }: GlobalLayoutProps) => {
  return (
    <ThemeHandler>
      <Reset />
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyle />
      <Header />
      {children}
    </ThemeHandler>
  );
};

export default GlobalLayout;
