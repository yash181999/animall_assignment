import logo from "./logo.svg";
import "./App.css";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./Components/Home/Home";
import { useStateValue } from "./StateProvider";
import SearchedList from "./Components/SearchedList/SearchedList";
import Header from "./Components/Header/Header";
import MovieDetails from "./Components/MovieDetails/MovieDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Switch>
          <Route path={`/search`} component={SearchedList}></Route>
          <Route path={`/movie`} component={MovieDetails}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
