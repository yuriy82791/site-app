import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./reset.scss";
import "./style.scss";
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
        <div className="">
          <Switch>
            <Route exact component={HomePage} path="/site-app" />
            <Route exact component={PostPage} path="/site-app/posts" />
            <Route exact component={User} path="/site-app/contacts/:username" />
            <Route exact component={ContactsPage} path="/site-app/contacts" />
            <Route exact component={GalleryPage} path="/site-app/gallery" />
            <Route component={() => <h1 className="text-404">404</h1>} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}
