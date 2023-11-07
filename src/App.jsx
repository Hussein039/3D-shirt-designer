import Canvas from "./canvas";
import Customizer from "./pages/Customizer";
import Home from "./pages/Home";
import Example from "./pages/Navbar";

function App() {
  return (
    <main className="app transition-all ease-in">
      <Example />
      <Home />
      <Canvas />
      <Customizer />
    </main>
  );
}

export default App;
