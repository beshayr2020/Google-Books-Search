import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Search from "./pages/search";
import Save from "./pages/saved";


function App() {
  return (
    <>
    <Navbar />
    <Jumbotron />
    <Router>
      <Route exact path="/" component={Search}/>
      <Route exact path="/saved" component={Save}/>
      <Route exact path="/saved/:id" component={Save} />
    </Router>
    </>
  );
}

export default App;
