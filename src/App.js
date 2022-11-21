
import './App.css';
import Home from './components/Home';
import {
  Switch,
  Route} from 'react-router-dom'
import About from './components/About';
import Colortest from './components/Colortest';
import Contact from './components/Contact';
import Distance from './components/Distance';


function App() {
  return (
    <>
    <Switch>
          
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/About">
            <About/>
          </Route>
          <Route path="/Contact">
            <Contact/>
          </Route>
          <Route path="/Colortest">
            <Colortest/>
          </Route>
          <Route path="/Distance">
            <Distance/>
          </Route>

    </Switch>
    </>
  );
}

export default App;
