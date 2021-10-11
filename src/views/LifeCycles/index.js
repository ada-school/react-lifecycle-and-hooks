import { useState } from "react";

import Toggler from "../../components/Toggler";
import ClassLifeCycles from "./ClassLifeCycles";
import FunctionLifeCycles from "./FunctionLifeCycles";
import "./styles.css";

const OPTIONS = [
  { optionId: "function-lifecycle", label: "Functions" },
  { optionId: "class-lifecycle", label: "Classes" },
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
      {selectedOption === "function-lifecycle" ? (
        <FunctionLifeCycles />
      ) : (
        <ClassLifeCycles />
      )}
    </div>
  );
}
