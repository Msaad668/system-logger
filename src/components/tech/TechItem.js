import React from "react";

const TechItem = ({ tech }) => {
  return (
    <div>
      <li className="collection-item">
        {tech.firstName} {tech.lastName}{" "}
        <i className="material-icons grey-text secondary-content">delete</i>
      </li>
    </div>
  );
};

export default TechItem;
