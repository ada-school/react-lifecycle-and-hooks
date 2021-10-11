import "./styles.css";

export default function Body({ title, children }) {
  return (
    <section className="app-body">
      {title && <h2>{title}</h2>}
      <article className="app-container">{children}</article>
    </section>
  );
}
