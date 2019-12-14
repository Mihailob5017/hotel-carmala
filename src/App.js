import React, { useContext } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { LastLocationProvider } from "react-router-last-location";
import contextValue from "./Context API/Rooms Context/RoomsContext";
//components
import Home from "./Components/Home Page/Home";
import About from "./Components/About Page/About";
import Search from "./Components/Search Page/Search";
import Contact from "./Components/Contact Page/Contact";
import Room from "./Components/Room Page/Room";
//
const App = () => {
  const context = useContext(contextValue);

  return (
    <Router>
      <LastLocationProvider>
        <>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/search" component={Search} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            {context.rooms.map((__room, i) => {
              return (
                <Route
                  key={i}
                  path={`/${__room.id}`}
                  render={props => <Room props={props} roomData={__room} />}
                />
              );
            })}
          </Switch>
        </>
      </LastLocationProvider>
    </Router>
  );
};

export default App;
