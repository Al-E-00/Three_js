import Canvas from "./canvas"
import Cutomizer from "./pages/Cutomizer"
import Home from "./pages/Home"

function App() {
  return (
    <div>
      <main className="app transition-all ease-in">
        <Home />
        <Canvas />
        <Cutomizer />
      </main>
    </div>
  )
}

export default App
