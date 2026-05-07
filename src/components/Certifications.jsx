import Section from "./Section";
import { certificationsData } from "../data/certifications";

function Certifications() {
  return (
    <Section id="certifications" title="Certifications">
      <div className="panel">
        <ul className="cert-list">
          {certificationsData.certifications.map((cert) => (
            <li key={cert.name}>
              <p className="cert-name">{cert.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export default Certifications;
