import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import MyProject from "../components/MyProject.jsx";
function HomePage() {
  return (
    <div>
      <header>
        <Navbar />
        <Hero />
      </header>
      <main>
        <MyProject />
      </main>
    </div>
  );
}
export default HomePage;
