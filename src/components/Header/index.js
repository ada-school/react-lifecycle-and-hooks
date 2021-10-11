import logo from "../../img/ada-logo.png";
import "./styles.css";

export default function Header() {
  return (
    <header className="header">
      <img
        alt="ada school logo"
        src={logo}
        loading="lazy"
        width="108"
        height="46"
      />
    </header>
  );
}
