import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.scss";
export default class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
