/* eslint-disable @next/next/no-page-custom-font */
import { createGlobalStyle } from "styled-components";
import Head from "next/head";
import { useState, useEffect } from "react";
import { Reset } from "styled-reset";
import variables from "../../theme/variables";
import { ThemeType } from "../../types";
import ThemeHandler from "./ThemeHandler";
import Header from "../Header/Header";
import DarkBackground from "../DarkBackground/DarkBackground";

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
    ${variables}
    html {
      font-size: clamp(16px, calc(1rem + (20 - 16) * ((100vw - var(--bp-mobile)) / (var(--max-width) - var(--bp-mobile)))), 20px);
      min-height: 1vw;
    }
    body{
        background: ${(props) => props.theme.background};
        width: 100vw;
        overflow-x: hidden;
        transition: background-color var(--transition);
        height: 500vh;
        padding-top: var(--px120);
    }
    body, *{
        font-family: var(--f-primary);
    }
`;

interface GlobalLayoutProps {
  children: React.ReactNode;
}

const GlobalLayout = ({ children }: GlobalLayoutProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  });
  return (
    <ThemeHandler>
      <Reset />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
      <Header isScrolled={isScrolled} />
      <DarkBackground />
      {children}
    </ThemeHandler>
  );
};

export default GlobalLayout;
