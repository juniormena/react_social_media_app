import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';


//pages
import { Home, Login, Signup } from "./pages";
//components
import Navbar from "./components/Navbar";

const theme = createMuiTheme({
  palette:{
    primary:{
      light:'#33c9dc',
      main:'#00bcd4',
      dark:'#008394',
      contrastText:'#fff'
    },
    secondary:{
      light:'#ff6333',
      main:'#ff3d00',
      dark:'#b22a00',
      contrastText:'#fff'
    }
  }
})

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
        <Router>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/signup">
                <Signup />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
