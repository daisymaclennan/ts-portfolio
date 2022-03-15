import Head from "next/head";
import { useState } from "react";
import ColorPicker from "../../components/ColorPicker/ColorPickerBig";
import ColorPreview from "../../components/ColorPicker/ColorPreview";
import ContentWrapper from "../../components/ContentWrapper";

export default function Home() {
  const [color, setColor] = useState("#FFFFFF");
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

        <ColorPreview color={color} />
      </ContentWrapper>
    </div>
  );
}
