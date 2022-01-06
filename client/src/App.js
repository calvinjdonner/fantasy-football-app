import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Axios from "axios";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Nav from "./components/Nav";
import footballImages from "./components/Images";

import About from "./components/About";
import Join from "./components/Join";
import Schedule from "./components/Schedule";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  
  const nflNews = () => {
    Axios.get(
      "https://api.sportsdata.io/v3/nfl/scores/json/News?key=8d47ddc73491478086570cc47316de1b"
    ).then((response) => {
      console.log(response);
    });
  };
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
          </Switch>
          <main>
            <About slides={footballImages}></About>
            <Join></Join>
            <Schedule></Schedule>
            <div>
              News <button onClick={nflNews}>Get NFL news now</button>
            </div>
          </main>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
