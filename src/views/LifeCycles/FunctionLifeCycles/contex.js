import React, { useState, useContext, createContext } from "react";

const PlayerContext = createContext([
  {
    name: "",
    points: 0,
  },
  (player) => player,
]);

const FirstComponent = () => (
  <div className="flex-center flex-column">
    <h3>Primer Nivel</h3>
    <SecondComponent />
  </div>
);
const SecondComponent = () => (
  <div className="flex-center flex-column">
    <h3>Segundo Nivel</h3>
    <ThirdComponent />
  </div>
);
const ThirdComponent = () => (
  <div className="flex-center flex-column">
    <h3>Tercer Nivel</h3>
    <FourthComponent />
  </div>
);
const FourthComponent = () => {
  const [player, setPlayer] = useContext(PlayerContext);
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h3>Cuarto Nivel</h3>
      <div>{`Name: ${player.name}`}</div>
      <div>{`Points: ${player.points}`}</div>
      <button
        className="app-button"
        onClick={() => setPlayer({ ...player, points: player.points + 1 })}
      >
        +
      </button>
    </div>
  );
};

export default function ContextSection(props) {
  const playerState = useState({ name: "Pepito Perez", points: 1 });
  return (
    <PlayerContext.Provider value={playerState}>
      <div className="flex-center flex-column">
        <h3>useContext</h3>
        <div className="flex-center flex-column">
          <FirstComponent />
        </div>
      </div>
    </PlayerContext.Provider>
  );
}
