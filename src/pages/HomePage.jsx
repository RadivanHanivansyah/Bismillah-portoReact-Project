import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import MyProject from "../components/MyProject.jsx";
import Skills from "../components/Skills.jsx";
function HomePage() {
  return (
    <div>
      <header>
        <Navbar />
        <Hero />
      </header>
      <Skills />
      <main>
        <MyProject />
      </main>
    </div>
  );
}
export default HomePage;
