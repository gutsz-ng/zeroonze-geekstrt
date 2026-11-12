/** Seção com título (e subtítulo opcional) centralizados. */
export default function Section({ title, subtitle, id, className = "section container", children }) {
  return (
    <section className={className} id={id}>
      {title && <h2 className="section__title display">{title}</h2>}
      {subtitle && <p className="section__subtitle">{subtitle}</p>}
      {children}
    </section>
  );
}
