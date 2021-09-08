import "./App.css";
import"bootstrap/dist/css/bootstrap.min.css";
import navigation from "./components/navigation";
import {Route,switch}from "react-router-dom";
import UserList from './components/userList'
import UserListAxios from "./components/UserListAxios";
import profil from "./components/profil";
    
function App() {
  return (
    <div className="App">
    <navigation/>
    <switch>
    {/*<route path='/'component={Userlist}
  />*/}
  <route exact path='/'component={UserListAxios}/>
  <route exact path='profil/:id' render={(props)=>
    <Profil {...props}/>
    }/>
    </switch>
    </div>
  );
  }
  export default App;