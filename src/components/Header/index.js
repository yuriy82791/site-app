import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.scss";
export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <nav className="menu">
          <Link to="/">Home</Link>

          <Link to="/posts">Posts</Link>

          <Link to="/gallery">Gallery</Link>

          <Link to="/contacts">Contacts</Link>
        </nav>
      </header>
    );
  }
}
