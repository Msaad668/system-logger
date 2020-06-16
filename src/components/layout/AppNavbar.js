import React, { useRef } from "react";
import { searchLogs } from "../../actions/logActions";
import { connect } from "react-redux";

const AppNavbar = ({ searchLogs }) => {
  const text = useRef("");

  const onChangeHandler = (e) => {
    searchLogs(text.current.value);
  };

  return (
    <nav style={{ marginBottom: "30px" }} className="blue">
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input
              id="search"
              type="search"
              placeholder="Search Logs"
              ref={text}
              onChange={onChangeHandler}
            />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default connect(null, { searchLogs })(AppNavbar);
