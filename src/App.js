import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UserListAxios from "./UserListAxios.js";
import UserList from "./Userlist.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./Navigation";

function App() {
  return (
    <Router>
    <div className="App">
    <Navigation />
        <Switch>
          {/*<route path='/'component={Userlist}
  />*/}
          <Route exact path="/" component={UserList} />
          
        </Switch>
   
    </div>
    </Router>
  );
}
export default App;
