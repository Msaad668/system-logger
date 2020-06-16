import React from "react";
import TechItem from "./TechItem";
import { connect } from "react-redux";
import { getTechs } from "../../actions/techActions";

const TechListModal = ({ techs, loading, getTechs }) => {
  // useEffect(() => {
  //   getTechs();
  // }, [getTechs]);

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <ul className="collection with-header">
          <li className="collection-header">
            <h4>all technicians</h4>
          </li>
          {!loading &&
            techs !== null &&
            techs.map((tech) => <TechItem key={tech.id} tech={tech} />)}
        </ul>
      </div>
      <div className="modal-footer">
        <a href="#!" className="modal-close waves-effect blue btn">
          close
        </a>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  techs: state.tech.techs,
  loading: state.tech.loading,
});

export default connect(mapStateToProps, { getTechs })(TechListModal);
