import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//componets
import "./App";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//pages
import Home from "./views/Home";
import Blog from "./components/pages/Blog/Blog";
import Crud_blog from "./components/pages/Blog/Crud_blog";
import Edit from "./components/pages/Blog/Edit";


function Routes() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/blog" component={Blog} />
          <Route path="/crud" component={Crud_blog} />
          <Route path="/edit" component={Edit} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default Routes;
