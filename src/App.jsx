import HeroAbout from "./components/HeroAbout";
import ServerlessArchitecture from "./components/ServerlessArchitecture";
import Certifications from "./components/Certifications";
import ContactForm from "./components/ContactForm";
import brandIcon from "./assets/brand-icon.png";

function App() {
  return (
    <div>
      <nav className="nav container" aria-label="Main navigation">
        <a href="#" className="brand-link" aria-label="Home">
          <img src={brandIcon} alt="Brand icon" className="brand-icon" />
        </a>
        <div className="nav-links">
          <a href="#projects">ARCHITECTURE SUITE</a>
          <a href="#certifications">CERTIFICATIONS</a>
          <a href="#contact">CONTACT</a>
        </div>
      </nav>

      <HeroAbout />
      <main>
        <ServerlessArchitecture />
        <Certifications />
        <ContactForm />
      </main>

    </div>
  );
}

export default App;
