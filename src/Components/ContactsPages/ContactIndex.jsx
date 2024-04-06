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
      selectedContact: undefined,
      isUpdating: false,
    };
  }

  handleAddContact = (newContact) => {
    if (newContact.name === "") {
      return { status: "failure", msg: "Name cannot be empty" };
    } else if (newContact.email === "") {
      return { status: "failure", msg: "Email cannot be empty" };
    }

    const duplicateRecord = this.state.contactList.filter((x) => {
      if (x.name === newContact.name && x.phone === newContact.phone) {
        return true;
      }
    });

    if (duplicateRecord.length > 0) {
      return { status: "failure", msg: "Duplicate Record" };
    } else {
      const newFinalContact = {
        ...newContact,
        id: this.state.contactList[this.state.contactList.length - 1].id + 1,
        isFavourite: false,
      };
      this.setState((prevState) => ({
        contactList: [...prevState.contactList, newFinalContact],
      }));
      return { status: "success", msg: "Contact Added Successfully" };
    }
  };

  handleUpdateContact = (updatedContact) => {
    console.log(updatedContact);
    if (updatedContact.name == "") {
      return { status: "failure", msg: "Name cannot be empty" };
    } else if (updatedContact.email == "") {
      return { status: "failure", msg: "Email cannot be empty" };
    }

    this.setState((prevState) => ({
      contactList: prevState.contactList.map((obj) => {
        if (obj.id == updatedContact.id) {
          return {
            ...obj,
            name: updatedContact.name,
            email: updatedContact.email,
            phone: updatedContact.phone,
          };
        }
        return obj;
      }),
      isUpdating: false,
      selectedContact: undefined,
    }));
    return { status: "success", msg: "Contact Updated Successfully" };
  };

  handletoggleFavourite = (contact) => {
    this.setState((prevState) => {
      return {
        contactList: prevState.contactList.map((obj) => {
          if (obj.id === contact.id) {
            return { ...obj, isFavourite: !obj.isFavourite };
          }
          return obj;
        }),
      };
    });
  };

  handleDeleteContact = (contact) => {
    this.setState((prevState) => {
      return {
        contactList: prevState.contactList.filter(
          (obj) => obj.id !== contact.id
        ),
      };
    });
  };

  handleAddRandomContact = (newContact) => {
    const newFinalContact = {
      ...newContact,
      id: this.state.contactList[this.state.contactList.length - 1].id + 1,
      isFavourite: false,
    };
    this.setState((prevState) => ({
      contactList: [...prevState.contactList, newFinalContact],
    }));
  };

  handleRemoveAllContact = () => {
    this.setState((prevState) => {
      return {
        contactList: [],
      };
    });
  };

  handleUpdateClick = (contact) => {
    console.log(contact);
    this.setState((prevState) => {
      return {
        selectedContact: contact,
        isUpdating: true,
      };
    });
  };

  handleUpdateCancelContact = (contact) => {
    console.log(contact);
    this.setState((prevState) => {
      return {
        selectedContact: contact,
        isUpdating: false,
      };
    });
  };

  render() {
    return (
      <div>
        <Header />
        <div className="container" style={{ minHeight: "85vh" }}>
          <div className="row py-3">
            <div className="col-4 offset-2">
              <AddRandomContact
                handleAddRandomContact={this.handleAddRandomContact}
              />
            </div>
            <div className="col-4  row">
              <RemoveAllContact
                handleRemoveAllContact={this.handleRemoveAllContact}
              />
            </div>
            <div className="row py-2">
              <div className="col-8 offset-2 row">
                <AddContact
                  isUpdating={this.state.isUpdating}
                  selectedContact={this.state.selectedContact}
                  handleAddContact={this.handleAddContact}
                  handleUpdateCancelContact={this.handleUpdateCancelContact}
                  handleUpdateContact={this.handleUpdateContact}
                />
              </div>
            </div>
            <div className="row py-2">
              <div className="col-8 offset-2">
                <FavouriteContacts
                  contacts={this.state.contactList.filter(
                    (u) => u.isFavourite == true
                  )}
                  favouriteClick={this.handletoggleFavourite}
                  deleteClick={this.handleDeleteContact}
                  updateClick={this.handleUpdateClick}
                />
              </div>
            </div>
            <div className="row py-2">
              <div className="col-8 offset-2">
                <GeneralContacts
                  contacts={this.state.contactList.filter(
                    (u) => u.isFavourite == false
                  )}
                  favouriteClick={this.handletoggleFavourite}
                  deleteClick={this.handleDeleteContact}
                  updateClick={this.handleUpdateClick}
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ContactIndex;
