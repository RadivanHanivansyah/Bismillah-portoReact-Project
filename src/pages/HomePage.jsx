import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import MyProject from "../components/MyProject.jsx";
import Skills from "../components/Skills.jsx";
import { Outlet } from "react-router";
function HomePage() {
  return (
    <div>
      <Hero />
      <Skills />
      <MyProject />
    </div>
  );
}
export default HomePage;
