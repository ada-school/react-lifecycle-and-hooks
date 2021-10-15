import Card from "../../../components/Card";
import "./styles.css";
import { usePokemonList } from "../../../hooks/usePokemonList";

const TYPE_ICONS = {
  normal: "🔶",
  fighting: "💪",
  flying: "🪶",
  poison: "🍄",
  ground: "⛰️",
  rock: "🪨",
  bug: "🐛",
  ghost: "👻",
  steel: "⚙️",
  fire: "🔥",
  water: "💧",
  grass: "🍃",
  electric: "⚡️",
  psychic: "👁️",
  ice: "❄️",
  dragon: "🐲",
  dark: "🌙",
  fairy: "🌈",
};

export default function PokeList() {
  const { pokeList, requestInProgress, error } = usePokemonList();

  if (error && !requestInProgress)
    return (
      <Card showButtons={false}>
        <h3>Ocurrio un problema!</h3>
      </Card>
    );
  if (requestInProgress)
    return (
      <Card showButtons={false}>
        <h3>Cargando...</h3>
      </Card>
    );
  return (
    <Card showButtons={false}>
      <div className="flex-center flex-column poke-list-container">
        <h2>Lista de tipos pokemon</h2>
        <ul className="types-list">
          {pokeList.map((element) => {
            return (
              <li key={element.name} className="type-item">
                <p className="capitalize">{element.name}</p>
                <span>
                  {TYPE_ICONS[element.name] ? TYPE_ICONS[element.name] : "🚫"}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </Card>
  );
}
