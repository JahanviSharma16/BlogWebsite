import Home from "./components/pages/home/Home";
import Login from "./components/pages/login/Login.jsx";
import Register from "./components/pages/register/Register.jsx";
import Settings from "./components/pages/settings/Settings.jsx";
import Single from "./components/pages/single/Single.jsx";
import Write from "./components/pages/write/Write.jsx";
import TopBar from "./components/topbar/TopBar.jsx";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  const user = true;
  return (
    <Router>
      <TopBar/>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/register">{user ? <Register /> : <Home />}</Route>
          <Route path="/login">{user ? <Home /> : <Login />}</Route>
          <Route path="/write">{user ? <Write /> : <Register/>} </Route>
          <Route path="/settings">{user ? <Settings />: <Register />}</Route>
          <Route path="/post/:postId">
            <Single />
          </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
