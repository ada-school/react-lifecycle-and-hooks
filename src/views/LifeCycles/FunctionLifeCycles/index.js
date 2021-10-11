import { useState } from "react";

import StateSection from "./state";
import EffectSection from "./effect";
import ContextSection from "./contex";
import ReducerSection from "./reducer";
import MemoSection from "./memo";
import Card from "../../../components/Card";
import "./styles.css";

const SECTIONS = [
  { section: StateSection },
  { section: EffectSection },
  { section: ContextSection },
  { section: ReducerSection },
  { section: MemoSection },
];

export default function FunctionLifeCycles() {
  const [selectedSection, setSelectedSection] = useState(0);
  const Section = SECTIONS[selectedSection].section;

  const nextSection = () => {
    if (selectedSection < SECTIONS.length - 1) {
      setSelectedSection(selectedSection + 1);
    }
  };

  const prevSection = () => {
    if (selectedSection > 0) {
      setSelectedSection(selectedSection - 1);
    }
  };

  return (
    <div className="function-lifecycle">
      <Card prevSection={prevSection} nextSection={nextSection}>
        <Section changeSection={setSelectedSection} section={selectedSection} />
      </Card>
    </div>
  );
}
