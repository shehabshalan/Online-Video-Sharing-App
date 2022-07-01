import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoutes from "./ProtectedRoutes";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import VideoDetails from "./pages/VideoDetails";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <ProtectedRoutes exact path="/" component={Home} />
        <ProtectedRoutes path="/video/:id" component={VideoDetails} />
        <ProtectedRoutes path="/upload" component={Upload} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
