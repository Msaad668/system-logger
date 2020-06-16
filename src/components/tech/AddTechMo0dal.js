import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

const AddTechModal = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const submit = () => {
    if (firstName.length === 0 || lastName.length === 0) {
      M.toast({ html: "please enter a message and a tech" });
    } else {
      console.log(firstName);
      M.toast({ html: "added successfully" });

      //clear
      setFirstName("");
      setLastName("");
    }
  };

  return (
    <div
      id="tech-modal"
      className="modal"
      style={{ height: "55%", width: "75%" }}
    >
      <div className="modal-content">
        <h4>new technician</h4>
        <div className="row">
          <div className="input-field ">
            <input
              name="firstName"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="firstname">first name...</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field ">
            <input
              name="lastNmae"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="lastName">first name...</label>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={submit}
          className="modal-close waves-effect blue btn"
        >
          Enter
        </a>
      </div>
    </div>
  );
};

export default AddTechModal;
