import Head from "next/head";
import data from "../data";
import MoonText from "../components/MoonText/MoonText";
import IntroText from "../components/IntroText/IntroText";
import BigTitle from "../components/BigTitle/BigTitle";
import SkillRocket from "../components/SkillRocket/SkillRocket";
import Project from "../components/Project/Project";
import Projects from "../components/Project/Projects";

export default function Home() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Head>
        <title>Daisy Maclennan</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Raleway:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <MoonText />
      <IntroText text={data.introduction} />
      <BigTitle>My skills</BigTitle>
      <SkillRocket skills={data.skills} />
      <BigTitle>Projects</BigTitle>
      <Projects>
        {data.projects.map((proj) => (
          <Project
            key={proj.name}
            name={proj.name}
            github={proj.github}
            live={proj.live}
            play={proj.play}
            design={proj.design}
          />
        ))}
      </Projects>
    </div>
  );
}
