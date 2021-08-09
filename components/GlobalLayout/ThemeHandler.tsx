import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Context } from "../../contexts/Context";
import darkTheme from "../../theme/darkTheme";
import lightTheme from "../../theme/darkTheme";
import { ThemeType } from "../../types";

const ThemeHandler = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>(darkTheme);
  const switchTheme = (newTheme: "dark" | "light") =>
    setTheme(newTheme === "dark" ? darkTheme : lightTheme);

  return (
    <Context.Provider value={{ theme, switchTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Context.Provider>
  );
};

export default ThemeHandler;
