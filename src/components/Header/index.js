import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.scss";
export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <nav className="menu">
          <Link to="/site-app/">Home</Link>

          <Link to="/site-app/posts">Posts</Link>

          <Link to="/site-app/gallery">Gallery</Link>

          <Link to="/site-app/contacts">Contacts</Link>
        </nav>
      </header>
    );
  }
}
