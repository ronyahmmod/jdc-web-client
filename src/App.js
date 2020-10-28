import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";

import Chairman from "./images/president.png";
import VicePrincipal from "./images/vice-principal.jpg";
import Principal from "./images/principal.jpg";

import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import SidBar from "./components/sidebar/sidebar.component";
import Navbar from "./components/navbar/navbar.component";
import Hero from "./components/hero/hero.component";
import Carousel from "./components/carousel/carousel.component";

import HomePage from "./pages/homepage/homepage.component";

function App() {
  return (
    <div>
      <Header />
      <Carousel />
      <Navbar />

      <section className="main container-fluid">
        <div className="row">
          <div className="col-sm-2">
            <SidBar />
          </div>

          <div className="col-sm-6">
            <Switch>
              <Route path="/" exact component={HomePage} />
            </Switch>
          </div>

          <div className="col-sm-4">
            <Hero
              image={Chairman}
              title="S.M. Munim Linkon"
              sub_title="Chairman, GB"
            />
            <Hero
              image={Principal}
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
      <Footer />
    </div>
  );
}

export default App;
