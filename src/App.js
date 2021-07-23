import "./styles/main.css";
import { Route, Switch } from "react-router-dom";

import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import PasswordReset from "./Pages/PasswordReset";
import Home from "./Pages/Home";

import Redirect from "./components/Redirect";
function App() {
  return (
    <div className="flex bg-gray-50">
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/account/password/reset" component={PasswordReset} />
        <Route path="/reditect/:id" component={Redirect} />
        <Route path="/home" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
