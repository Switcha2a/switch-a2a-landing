import Hero from "../sections/Hero";
import ProjectStatus from "../sections/ProjectStatus";
import Problem from "../sections/Problem";
import Solution from "../sections/Solution";
import Demo from "../sections/Demo";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Solution />
      <Demo />
      <ProjectStatus />
    </>
  );
}
