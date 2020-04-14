import React from "react";
import "./style.scss";
import { contacts } from "../../assets/contactData";
export default (props) => {
  const userName = props.match.params.username;
  const userArr = contacts.filter((item) => {
    return item.userName === userName;
  });
  console.log(userArr);
  return (
    <div className="container">
      <div className="user-block">
        <div className="user-block-text">
          <strong>First name:</strong> {userArr[0].firstName}
        </div>
        <div className="user-block-text">
          <strong>Last name:</strong> {userArr[0].lastName}
        </div>
        <div className="user-block-text">
          <strong>Phone:</strong> {userArr[0].phone}
        </div>
        <div className="user-block-text">
          <strong>Gender:</strong> {userArr[0].gender}
        </div>
      </div>
    </div>
  );
};
