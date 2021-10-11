import "./styles.css";

export default function Button({ onClick, children, disabled }) {
  return (
    <button className="app-button" onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
