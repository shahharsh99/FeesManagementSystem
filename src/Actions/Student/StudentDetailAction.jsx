import {
FETCH_STUDENT_DETAIL_REQUEST,
FETCH_STUDENT_DETAIL_SUCCESS,
FETCH_STUDENT_DETAIL_FAILURE,
} from "../../Types/Student/types";
import axios from "axios";

export const fetchStudentDetailRequest = () => ({
type: FETCH_STUDENT_DETAIL_REQUEST,
});

export const fetchStudentDetailSuccess = (data) => ({
type: FETCH_STUDENT_DETAIL_SUCCESS,
data,
});

export const fetchStudentDetailFailure = (error) => ({
type: FETCH_STUDENT_DETAIL_FAILURE,
error,
});

export const fetchStudentDetail = (id) => (dispatch) => {

dispatch(fetchStudentDetailRequest());
const config = {
    headers: {
    Authorization: localStorage.getItem("userAccessToken"),
},
};

return axios
    .get(`https://student-info-feathers.herokuapp.com/student/${id}`, config)
    .then((data) => {
    dispatch(fetchStudentDetailSuccess(data));
    })
    .catch((error) => {
    dispatch(fetchStudentDetailFailure(error));
    });
};
