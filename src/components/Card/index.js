import Button from "../Button";
import "./styles.css";

export default function Card({
  prevSection,
  nextSection,
  children,
  showButtons = true,
}) {
  return (
    <div className="card">
      {showButtons && (
        <div className="card-corner">
          <Button onClick={() => prevSection()}>{"⬅️"}</Button>
        </div>
      )}
      <div className="card-body">{children}</div>
      {showButtons && (
        <div className="card-corner">
          <Button onClick={() => nextSection()}>{"➡️"}</Button>
        </div>
      )}
    </div>
  );
}
