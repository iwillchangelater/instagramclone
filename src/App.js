import "./styles/main.css";
import { Route, Switch, useHistory } from "react-router-dom";

import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import PasswordReset from "./Pages/PasswordReset";
import Home from "./Pages/Home";

import Redirect from "./components/Redirect";
import DirectChat from "./Pages/DirectChat";
import User from "./Pages/User";
import { LogProvider } from "./context/LogContext";
import { UserProvider } from "./context/UserContext";

function App() {
  const token = localStorage.getItem("token");
  const history = useHistory();
  if (!token) history.push("/");
  return (
    <div className="flex bg-gray-50">
      <UserProvider>
        <LogProvider>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/account/password/reset" component={PasswordReset} />
            <Route path="/reditect/:id" component={Redirect} />
            <Route path="/home" component={Home} />
            <Route path="/direct/inbox" component={DirectChat} />
            <Route path="/:userid" component={User} />
          </Switch>
        </LogProvider>
      </UserProvider>
    </div>
  );
}

export default App;
