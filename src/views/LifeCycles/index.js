import { useState } from "react";

import Toggler from "../../components/Toggler";
import ClassLifeCycles from "./ClassLifeCycles";
import FunctionLifeCycles from "./FunctionLifeCycles";
import PokeList from "./PokeList";
import "./styles.css";

const OPTIONS = [
  { optionId: "function-lifecycle", label: "Functions" },
  { optionId: "class-lifecycle", label: "Classes" },
  { optionId: "pokemon-card", label: "Poke  List" },
];

export default function LifeCycles() {
  const [selectedOption, setSelectedOption] = useState("function-lifecycle");
  return (
    <div className="life-cycle-container">
      <Toggler
        options={OPTIONS}
        activeOption={selectedOption}
        onToggle={(newOption) => setSelectedOption(newOption)}
      />
      {renderOption()}
    </div>
  );

  function renderOption() {
    switch (selectedOption) {
      case "function-lifecycle":
        return <FunctionLifeCycles />;
      case "class-lifecycle":
        return <ClassLifeCycles />;
      case "pokemon-card":
        return <PokeList />;
      default:
        return null;
    }
  }
}
