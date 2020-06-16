const { SET_LOADING, GET_TECHS, TECHS_ERROR, LOGS_ERROR } = require("./types");

// adding new technician
export const addTech = (tech) => async (dispatch) => {};

//getting techs
export const getTechs = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch("/techs");
    const data = await res.json();

    dispatch({
      type: GET_TECHS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response.statusText,
    });
  }
};

//set loading
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
