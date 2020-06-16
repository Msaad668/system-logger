import React from "react";
import { getTechs } from "../../actions/techActions";
import { connect } from "react-redux";

const AddBtn = ({ getTechs }) => {
  const onClickHandler = () => {
    getTechs();
  };

  return (
    <div className="fixed-action-btn">
      <a
        href="#add-modal-log"
        className="btn-floating btn-large blue darken-2 modal-trigger"
      >
        <i className="large material-icons">add</i>
      </a>
      <ul>
        <li>
          <a
            href="#tech-list-modal"
            className="btn-floating green modal-trigger"
            onClick={onClickHandler}
          >
            <i className="material-icons">person</i>
          </a>
        </li>
        <li>
          <a href="#tech-modal" className="btn-floating red modal-trigger">
            <i className="material-icons">person_add</i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default connect(null, { getTechs })(AddBtn);
