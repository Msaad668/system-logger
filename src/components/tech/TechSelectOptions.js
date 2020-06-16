import React, { useEffect } from "react";
import { getTechs } from "../../actions/techActions";
import { connect } from "react-redux";

const TechSelectOptions = ({ tech: { techs, loading }, getTechs }) => {
  useEffect(() => {
    getTechs();
  }, [getTechs]);
  return (
    !loading &&
    techs !== null &&
    techs.map((tech) => (
      <option key={tech.id}>
        {tech.firstName} {tech.lastName}
      </option>
    ))
  );
};

const mapStateToProps = (state) => ({
  tech: state.tech,
});

export default connect(mapStateToProps, { getTechs })(TechSelectOptions);
