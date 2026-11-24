import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import MyProject from "../components/MyProject.jsx";
import Skills from "../components/Skills.jsx";
import { Outlet } from "react-router";
import ProjectCard from "../components/ProjectCard.jsx";
function HomePage() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Skills />
      <MyProject />
      <ProjectCard />
    </div>
  );
}
export default HomePage;
