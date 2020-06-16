import React from "react";

const LogItem = ({ log }) => {
  return (
    <li class="collection-item">
      <div>
        <a
          href="#edit-modal-trigger"
          className={`modal-trigger ${
            log.attention ? "red-text" : "blue-text"
          }`}
        >
          {log.message}
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">#{log.id}</span>{" "}
          <span>last updated by </span>{" "}
          <span className="black-text">{log.tech}</span>
        </span>
      </div>
    </li>
  );
};

export default LogItem;
