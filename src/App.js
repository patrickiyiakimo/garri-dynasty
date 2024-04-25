import Hero from "./hero/Hero";
import Navbar from "./navbar/Navbar";
import PopularGarri from "./popular/PopularGarri";


function App() {
  return (
    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="hero">
        <Hero />
      </div>
      <div className="popular">
        <PopularGarri />
      </div>
    </div>
  );
}

export default App;
