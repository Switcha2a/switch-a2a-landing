import Hero from "../sections/Hero";
import Problem from "../sections/Problem";
import Solution from "../sections/Solution";
import Audience from "../sections/Audience";
import Demo from "../sections/Demo";
import VideoDemo from "../sections/VideoDemo";
import ProjectStatus from "../sections/ProjectStatus";
import FinalCTA from "../sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Solution />
      <Audience />
      <Demo />
      <VideoDemo />
      <ProjectStatus />
      <FinalCTA />
    </>
  );
}
