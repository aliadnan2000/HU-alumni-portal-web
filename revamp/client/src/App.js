import React from "react";
import {Container} from "@material-ui/core";
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import Profile from "./components/Profile/Profile";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <Container maxwidth="false" disableGutters="true">
                <Navbar/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/auth" exact component={Auth}/>
                    <Route path="/profile" exact component={Profile}/>
                </Switch>
            </Container>
        </BrowserRouter>
        
    );
}

export default App;