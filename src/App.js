import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Hero from "./hero/Hero";
import Navbar from "./navbar/Navbar";
import PopularGarri from "./popular/PopularGarri";
import CartList from "./cartlist/CartList";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="navbar">
          <Navbar />
        </div>
        <Switch>
          <Route exact path="/">
            <div className="hero">
              <Hero />
            </div>
            <div className="popular">
              <PopularGarri />
            </div>
          </Route>
          <Route path="/cartlist">
            <CartList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
