import React from "react";
import Moment from "react-moment";
import { connect } from "react-redux";
import { deleteLog, setCurrent } from "../../actions/logActions";
import M from "materialize-css/dist/js/materialize.min.js";

const LogItem = ({ log, deleteLog, setCurrent }) => {
  const onDelete = () => {
    deleteLog(log.id);
    M.toast({ html: "log deleted successfully" });
  };

  const setcurrent = () => {
    setCurrent(log);
  };

  return (
    <li className="collection-item">
      <div>
        <a
          href="#edit-modal-log"
          onClick={setcurrent}
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
          <span className="black-text">{log.tech}</span> on{" "}
          <Moment format="MMMM Do YYY, h:mm:ss a">{log.date}</Moment>
        </span>
        <a href="#delete" onClick={onDelete} className="secondary-content">
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

export default connect(null, { deleteLog, setCurrent })(LogItem);
