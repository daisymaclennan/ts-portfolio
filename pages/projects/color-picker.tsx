import Head from "next/head";
import { useState } from "react";
import ColorPicker from "../../components/ColorPicker/ColorPickerBig";
import ColorPickerOpacity from "../../components/ColorPicker/ColorPickerOpacity";
import ColorPreview from "../../components/ColorPicker/ColorPreview";
import ContentWrapper from "../../components/ContentWrapper";

export default function Home() {
  const [color, setColor] = useState({
    actual: "rgba(0, 0, 0, 0)",
    array: [0, 0, 0, 0],
  });
  return (
    <div style={{ overflowX: "hidden" }}>
      <Head>
        <title>Daisy Maclennan - Color Picker</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Raleway:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <ContentWrapper>
        <ColorPicker setColor={setColor} color={color} />

        <ColorPickerOpacity color={color} setColor={setColor} />

        <ColorPreview color={color.actual} />
      </ContentWrapper>
    </div>
  );
}
