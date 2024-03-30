import React from "react";
import Header from "../Layout/Header";
import AddRandomContact from "./AddRandomContact";
import RemoveAllContact from "./RemoveAllContact";
import AddContact from "./AddContact";
import FavouriteContacts from "./FavouriteContacts";
import GeneralContacts from "./GeneralContacts";
import Footer from "../Layout/Footer";

class ContactIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactList: [
        {
          id: 1,
          name: "John Doe",
          phone: "1234567890",
          email: "asd@email.com",
          isFavourite: false,
        },
        {
          id: 2,
          name: "John carter",
          phone: "1234563467890",
          email: "dfh@email.com",
          isFavourite: true,
        },
        {
          id: 3,
          name: "Simon Doe",
          phone: "123425567890",
          email: "dfhjt@email.com",
          isFavourite: true,
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container" style={{ minHeight: "85vh" }}>
          <div className="row py-3">
            <div className="col-4 offset-2">
              <AddRandomContact />
            </div>
            <div className="col-4 offset-2">
              <RemoveAllContact />
            </div>
            <div className="row py-2">
              <AddContact />
            </div>
            <div className="row py-2">
              <FavouriteContacts
                contacts={this.state.contactList.filter(
                  (u) => u.isFavourite == true
                )}
              />
            </div>
            <div className="row py-2">
              <GeneralContacts
                contacts={this.state.contactList.filter(
                  (u) => u.isFavourite == false
                )}
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ContactIndex;
