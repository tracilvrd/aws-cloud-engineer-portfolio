import { profile } from "../data/profile";

function HeroAbout() {
  return (
    <header className="hero">
      <div className="container">
        <h1>{profile.name}</h1>
        <p className="eyebrow">{profile.role}</p>
        <p className="about-text">{profile.about}</p>
      </div>
    </header>
  );
}

export default HeroAbout;
