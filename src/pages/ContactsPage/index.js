import React from "react";
import Contacts from "../../components/contacts";
import { contacts } from "../../assets/contactData";
export const ContactsPage = () => {
  return (
    <div className="">
      <div className="contacts-wrapper">
        <Contacts contacts={contacts} />
      </div>
    </div>
  );
};
