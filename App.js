import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SignUp from './Components/SignUp';
import LogIn from './Components/LogIn';
import { Account } from "./Components/Account";
import Status from './Components/Status';
import Settings from './Components/Settings';


function App() {


  return (
    <Router>
    <div className="App">
      
      <div className="content">
        <Account>
          <Status />
        <Switch>
          <Route exact path='/'>
          <Navbar />
          <Home />
          </Route>
          <Route exact path= "/signup">
            <SignUp />
          </Route>
          <Route exact path="/login">
          <LogIn />
          </Route>
          <Route exact path="/settings">
          <Settings />
          </Route>
        </Switch>
        </Account>
      </div>
    </div>
    </Router>
  );
}

export default App;
