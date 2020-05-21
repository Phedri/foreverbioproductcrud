import React, { Component } from "react";

import ProductPage from "./Pages/ProductPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./css/App.css";
import UserPage from "./Pages/UserPage";
import CategoryPage from "./Pages/CategoryPage";
import CommandePage from "./Pages/CommandePage";
import DeliveryPage from "./Pages/DeliveryPage";
import NotFound from "./Pages/NotFound";

import Login from "./components/auth/Login";
import DashboardAdmin from "./components/body/Home/DashboardAdmin";
import DashboardLivreur from "./components/body/Home/DashboardLivreur";

import PrivateRouteAdmin from "./routes/PrivateRouteAdmin";
import PrivateRouteLivreur from "./routes/PrivateRouteLivreur";

class App extends Component {
  render() {
    const account = JSON.parse(localStorage.getItem("user"));
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/" exact>
              <Login />
            </Route>

            {
              //accessible aux administrateurs uniquement
            }
            <PrivateRouteAdmin
              exact
              path="/dashboardAdmin"
              component={DashboardAdmin}
            />
            <PrivateRouteAdmin exact path="/products" component={ProductPage} />
            <PrivateRouteAdmin exact path="/users" component={UserPage} />
            <PrivateRouteAdmin
              exact
              path="/categories"
              component={CategoryPage}
            />

            {
              //accessible aux livreurs uniquement
            }
            <PrivateRouteLivreur
              exact
              path="/dashboardLivreur"
              component={DashboardLivreur}
            />
            <PrivateRouteLivreur
              exact
              path="/commandes"
              component={CommandePage}
            />
            <PrivateRouteLivreur
              exact
              path="/deliveries"
              component={DeliveryPage}
            />

            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
