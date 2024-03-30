import React from "react";

const AddContact = () => {
  return (
    <div className="border row text-ehite p-2">
      <div className="col-12 text-ehite-50">Add a New Contact</div>
      <div className="col-12 col-md-4 p-1">
        <input
          className="form-control form-control-sm"
          placeholder="Enter Name"
        />
      </div>
      <div className="col-12 col-md-4 p-1">
        <input
          className="form-control form-control-sm"
          placeholder="Enter Email"
        />
      </div>
      <div className="col-12 col-md-4 p-1">
        <input
          className="form-control form-control-sm"
          placeholder="Enter Phone"
        />
      </div>
      <div className="col-12 col-md-6 offset-md-3 p-1">
        <button className="btn btn-primary form-control">Create</button>
      </div>
    </div>
  );
};

export default AddContact;
