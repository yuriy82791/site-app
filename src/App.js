import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./reset.scss";
import Header from "./components/Header";
import User from "./pages/User";
import { HomePage } from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import { GalleryPage } from "./pages/GalleryPage";
import { ContactsPage } from "./pages/ContactsPage";

export default function App() {
  return (
    <Router>
      <div className="site-container">
        <Header />
        <Switch>
          <Route exact component={HomePage} path="/" />
          <Route exact component={PostPage} path="/posts" />
          <Route exact component={User} path="/contacts/:username" />
          <Route exact component={ContactsPage} path="/contacts" />

          <Route exact component={GalleryPage} path="/gallery" />
          <Route component={() => <h1>404</h1>} />
        </Switch>
      </div>
    </Router>
  );
}
