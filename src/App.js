import Header from "./components/Header";
import Body from "./components/Body";
import LifeCycles from "./views/LifeCycles";

function App() {
  return (
    <>
      <Header />
      <Body title="Ciclo de vida de React y hooks">
        <LifeCycles />
      </Body>
    </>
  );
}

export default App;
