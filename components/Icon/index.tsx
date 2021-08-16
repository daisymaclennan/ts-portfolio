import React from "react";
import Sun from "./Sun";
import Moon from "./Moon";
import LinkedIn from "./LinkedIn";
import GitHub from "./GitHub";
import Cloud from "./Cloud";
import Star from "./Star";
import MoonVector from "./MoonVector";

const Icon = ({ name }) => {
  switch (name) {
    case "sun":
      return <Sun />;
    case "moon":
      return <Moon />;
    case "linkedin":
      return <LinkedIn />;
    case "github":
      return <GitHub />;
    case "cloud":
      return <Cloud />;
    case "star":
      return <Star />;
    case "moonVector":
      return <MoonVector />;
    default:
      return <div />;
  }
};

export default Icon;