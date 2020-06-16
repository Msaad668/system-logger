import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

const EditLogModal = () => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");

  const submit = () => {
    if (message.length === 0 || tech.length === 0) {
      M.toast({ html: "please enter a message and a tech" });
    } else {
      console.log(message);
      M.toast({ html: "added successfully" });

      //clear
      setMessage("");
      setTech("");
      setAttention(false);
    }
  };

  return (
    <div
      id="edit-modal-log"
      className="modal"
      style={{ height: "55%", width: "75%" }}
    >
      <div className="modal-content">
        <h4>edit log</h4>
        <div className="row">
          <div className="input-field ">
            <input
              name="message"
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label htmlFor="password">enter log</label>
          </div>
        </div>

        <label>select a tech</label>
        <select
          className="browser-default"
          value={tech}
          name="tech"
          onChange={(e) => setTech(e.target.value)}
        >
          <option value="" disabled>
            Choose your option
          </option>
          <option>John Doe</option>
          <option>Sam Smith</option>
          <option>Sara Wilson</option>
        </select>
        <div className="input-field">
          <p>
            <label>
              <input
                type="checkbox"
                className="filled-in"
                value={attention}
                onChange={(e) => setAttention(!attention)}
                checked={attention}
              />
              <span>Needs Attention</span>
            </label>
          </p>
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

export default EditLogModal;
