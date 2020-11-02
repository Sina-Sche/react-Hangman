import "./App.css";
import Figure from "./components/Figure";
import Header from "./components/Header";
import WrongLetters from "./components/WrongLetters";
import Word from "./components/Word";

function App() {
  return (
    <>
      <Header />
      <div className="game-container">
        <Figure />
        <WrongLetters />
        <Word />
      </div>
    </>
  );
}

export default App;
