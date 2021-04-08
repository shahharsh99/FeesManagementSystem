import {
  FETCH_DELETE_STANDARD_REQUEST,
  FETCH_DELETE_STANDARD_SUCCESS,
  FETCH_DELETE_STANDARD_FAILURE,
} from "../../Types/Standard/types";
import { apiToastError, apiToastSuccess } from "../../util/util";
import axios from "axios";

export const fetchDeleteStandardRequest = () => ({
  type: FETCH_DELETE_STANDARD_REQUEST,
});

export const fetchDeleteStandardSuccess = (data) => ({
  type: FETCH_DELETE_STANDARD_SUCCESS,
  data,
});

export const fetchDeleteStandardFailure = (error) => ({
  type: FETCH_DELETE_STANDARD_FAILURE,
  error,
});

export const fetchDeleteStandard = (id) => (dispatch) => {
  const config = {
    headers: {
      Authorization: localStorage.getItem("userAccessToken"),
    },
  };

  dispatch(fetchDeleteStandardRequest());

  return axios
    .delete(
      `https://student-info-feathers.herokuapp.com/standard/${id}`,
      config
    )
    .then((data) => {
        apiToastSuccess("Deleted Successfully")

      dispatch(fetchDeleteStandardSuccess(data));
    })
    .catch((error) => {
        apiToastError(error.response.data.message)

    dispatch(fetchDeleteStandardFailure(error));
    });
};
