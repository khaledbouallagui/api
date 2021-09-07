import "./App.css";
import"bootstrap/dist/css/bootstrap.min.css";
import navigation from "./components/navigation";
import {Route,switch}from "react-router-dom";
import UserList from './components/userList'
import UserListAxios from "./components/UserListAxios";
  case value:
    
function App() {
  return (
    <div className="App">
    <navigation/>
    <switch>
    {/*<route path='/'component={Userlist}
  />*/}
  <route path ='/'component={UserListAxios}/>
  <route path='profile/:id' render={(props)=>
    <Profile {...props}/>
    }/>
    </switch>
    </div>
  );
  }
  export default App;