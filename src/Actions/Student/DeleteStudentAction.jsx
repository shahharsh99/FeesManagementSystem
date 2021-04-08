import {
  FETCH_DELETE_STUDENT_REQUEST,
  FETCH_DELETE_STUDENT_SUCCESS,
  FETCH_DELETE_STUDENT_FAILURE,
} from "../../Types/Student/types";
import axios from "axios";
import { apiToastError, apiToastSuccess } from "../../util/util";


export const fetchDeleteStudentRequest = () => ({
  type: FETCH_DELETE_STUDENT_REQUEST,
});

export const fetchDeleteStudentSuccess = (data) => ({
  type: FETCH_DELETE_STUDENT_SUCCESS,
  data,
});

export const fetchDeleteStudentFailure = (error) => ({
  type: FETCH_DELETE_STUDENT_FAILURE,
  error,
});

export const fetchDeleteStudent = (id) => (dispatch) => {
  const config = {
    headers: {
      Authorization: localStorage.getItem("userAccessToken"),
    },
  };

  dispatch(fetchDeleteStudentRequest());

  return axios
    .delete(
      `https://student-info-feathers.herokuapp.com/student/${id}`,
      config
    )
    .then((data) => {
        apiToastSuccess("Deleted Successfully")

      dispatch(fetchDeleteStudentSuccess(data));
    })
    .catch((error) => {
        apiToastError(error.response.data.message)

    dispatch(fetchDeleteStudentFailure(error));
    });
};
