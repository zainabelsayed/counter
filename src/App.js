import "./App.css";
import Counter from "./components/counter/Counter";
import Shop from "./components/e-commerce/Shop";
import NavBar from "./components/navbar/NavBar";
import Home from "./components/home/Home";
import ProductDetails from "./components/e-commerce/ProductDetails";
import Todo from "./components/todo/Todo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Register from "./components/register/Register";

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
          <Route path="/todo" component={Todo}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
