// import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// // import ChatScreen from "../src/Components/ChatScreen/ChatScreen";
// // import Dashboard from "../src/Components/Dashboard/Dashboard";
// import Navbar from "./Components/Navbar/Navbar";
// import LoginScreen from "./Components/LoginScreen/LoginScreen";
// import HomeScreen from "./Components/HomeScreen/HomeScreen";
// // import { Route } from "@mui/icons-material";

// function App() {
//   return (
//     <Router>
//       <Switch>

//         <Route path="/homescreen" component={HomeScreen} />
//         <Route path="/loginscreen" component={LoginScreen} />
//         {/* <Route path="/chatscreen" component={ChatScreen} />
//         <Route path="/" component={Dashboard} /> */}
//       </Switch>
//     </Router>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import LoginScreen from "./Components/LoginScreen/LoginScreen";
import HomeScreen from "./Components/HomeScreen/HomeScreen";
import Content from "./Components/Content/Content";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/homescreen" exact component={HomeScreen} />
          <Route path="/loginscreen" component={LoginScreen} />
          <Route path="/Content" component={Content} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
