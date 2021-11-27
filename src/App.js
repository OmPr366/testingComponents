import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
import SmallCard from "./components/SmallCard";
import SelfAcc from "./components/SelfAcc";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Nav } from "./components/Nav";
import { Page2 } from "./components/Page2";
import { Page3 } from "./components/Page3";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <AnimatePresence exitBeforeEnter >
    <div className="App">
      <Router>
        <Nav />  
        <Switch>
                 
          <Route path="/page3">
            <Page3/>
          </Route>
          <Route path="/page2">
            <Page2/>
          </Route>
          <Route path="/">
          <SelfAcc />
          </Route>
        </Switch>
        
        {/* <Card/>
      <SmallCard/> */}
      </Router>
    </div>
    </AnimatePresence> 
  );
}

export default App;
