import React from "react";
import { connect } from "react-redux";
import { deleteTech } from "../../actions/techActions";

const TechItem = ({ tech, deleteTech }) => {
  const onClickHandler = () => {
    deleteTech(tech.id);
  };
  return (
    <div>
      <li onClick={onClickHandler} className="collection-item">
        {tech.firstName} {tech.lastName}{" "}
        <a href="#!" onClick={onClickHandler}>
          <i className="material-icons grey-text secondary-content">delete</i>
        </a>
      </li>
    </div>
  );
};

export default connect(null, { deleteTech })(TechItem);
