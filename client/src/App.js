import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Nav from "./components/Nav";
import footballImages from "./components/Images";
import Home from "./pages/Home";
import About from "./components/About";
import News from "./components/News";
import Form from "./components/Form";
// import StripeContainer from "./components/StripeContainer";
// import PaymentForm from "./components/PaymentForm";
// import Results from "./components/Results";

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
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/news" component={News} />
            <Route exact path="/form" component={Form} />
            {/* <Route exact path="/results" component={Results} /> */}
            <Route exact path="/" component={Home} />
            {/* <h1>Donate</h1>
            {showItem ? <StripeContainer/> : <> <h3>$2.00</h3></>} */}
          </Switch>
          <main>
            <About slides={footballImages}></About>
          </main>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
