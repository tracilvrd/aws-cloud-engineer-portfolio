function Section({ id, title, children }) {
  return (
    <section id={id} className="section container">
      <h2 className="section-title">{title}</h2>
      {children}
    </section>
  );
}

export default Section;
