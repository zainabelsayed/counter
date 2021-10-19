import "./App.css";
import Counter from "./components/Counter";
import Shop from "./components/Shop";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import ProductDetails from "./components/ProductDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
      <NavBar />
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/counter" component={Counter} />
          <Route path="/shop" component={Shop} exact/>
          <Route path="/shop/:id" component={ProductDetails}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
