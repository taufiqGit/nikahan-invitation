import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import MainPage from "./pages/main.js"
import Invitation from "./pages/invitation"
import SignUp from "./pages/signup.js"
import Login from "./pages/login.js" 
import { AuthContextWrap } from "./context/AuthContext.js"
import NotFound from "./components/404.js"

function App() {
  return (
    <AuthContextWrap>
      <Router>
      <main className="max-w-sm mx-auto h-screen">
        <Switch>
            <Route path="/invitation">
              <Invitation/>
            </Route>
            <Route path="/signup">
              <SignUp/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <Route exact path="/">
              <MainPage/>
            </Route>
            <Route component={NotFound}/>
        </Switch>
      </main>
      </Router>
    </AuthContextWrap>
  );
}

export default App;
