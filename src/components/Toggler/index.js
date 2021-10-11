import "./styles.css";

export default function Toggler({ options, onToggle, activeOption }) {
  return (
    <div className="toggle">
      {options.map(({ optionId, label }) => (
        <button
          key={optionId}
          onClick={() => onToggle(optionId)}
          className={`toggle-button ${
            activeOption === optionId ? "toggle-button-active" : ""
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
