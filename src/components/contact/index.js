import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMars } from "@fortawesome/free-solid-svg-icons";
import { faVenus } from "@fortawesome/free-solid-svg-icons";
import { faGenderless } from "@fortawesome/free-solid-svg-icons";
export default class Contact extends Component {
  getGender = (gender = null) => {
    if (gender === "male") {
      return faMars;
    } else if (gender === "female") {
      return faVenus;
    } else {
      return faGenderless;
    }
  };
  render() {
    return (
      <Router>
        <div className="contact">
          <div className="icon">
            <FontAwesomeIcon icon={this.getGender(this.props.contact.gender)} />
          </div>
          <div className="contact-information">
            <Link
              className="contact-name"
              to={`/contacts/${this.props.contact.userName}`}
            >
              {this.props.contact.firstName + " " + this.props.contact.lastName}
            </Link>
            <div className="contact-data">
              <span className="contact-phone">{this.props.contact.phone}</span>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
