import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";

import Precident from "./images/president.png";
import VicePrincipal from "./images/vice-principal.jpg";

import Header from "./components/header/header.component";
import SidBar from "./components/sidebar/sidebar.component";
import Hero from "./components/hero/hero.component";

import HomePage from "./pages/homepage/homepage.component";

function App() {
  return (
    <div>
      <Header />

      <section className="main container-fluid">
        <div className="row">
          <div className="col-sm-2">
            <SidBar />
          </div>

          <div className="col-sm-6">
            <Switch>
              <Route path="/history" exact component={HomePage} />
            </Switch>
          </div>

          <div className="col-sm-4">
            <Hero
              image={Precident}
              title="S.M. Munim Linkon"
              sub_title="Precident, GB"
            />
            <Hero
              image={VicePrincipal}
              title="MD. Ali Akhtar"
              sub_title="Principal"
            />
            <Hero
              image={VicePrincipal}
              title="MD. Jashim Uddin Ahmmed"
              sub_title="Vice Principal"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
