import Home from "./pages/Home.jsx"
import Favorites from "./pages/Favorites.jsx"
import Navbar from "./components/Navbar.jsx"
import {AnimeProvider} from "./contexts/AnimeContext.jsx"
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <AnimeProvider>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </AnimeProvider>
  )
}

export default App
