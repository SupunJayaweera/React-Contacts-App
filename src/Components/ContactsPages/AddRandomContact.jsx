import React from "react";
import { getRandomUser } from "../../Utility/api";

const GetRandomContact = async (props) => {
  const responsefromAPI = await getRandomUser();
  console.log(responsefromAPI);

  return props.handleAddRandomContact({
    name:
      responsefromAPI.data.first_name + " " + responsefromAPI.data.last_name,
    email: responsefromAPI.data.email,
    phone: responsefromAPI.data.phone_number,
  });
};

const AddRandomContact = (props) => {
  return (
    <div>
      <button
        className="btn btn-success form-control"
        onClick={() => GetRandomContact(props)}
      >
        Add Random Contact
      </button>
    </div>
  );
};

export default AddRandomContact;
