import Canvas from "./canvas"
import Cutomizer from "./pages/Cutomizer"
import Home from "./pages/Home"

function App() {
  return (
    <div>
      <h1 className="head-text">
        <main className="app transition-all ease-in">
          <Home />
          <Canvas />
          <Cutomizer />
        </main>
      </h1>
    </div>
  )
}

export default App
