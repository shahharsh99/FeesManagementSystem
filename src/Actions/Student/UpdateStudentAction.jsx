import {
FETCH_UPDATE_STUDENT_REQUEST,
FETCH_UPDATE_STUDENT_SUCCESS,
FETCH_UPDATE_STUDENT_FAILURE,
} from "../../Types/Student/types";
import { apiToastError, apiToastSuccess } from "../../util/util";
import axios from "axios";

export const fetchUpdateStudentRequest = () => ({
type: FETCH_UPDATE_STUDENT_REQUEST,
});

export const fetchUpdateStudentSuccess = (data) => ({
type: FETCH_UPDATE_STUDENT_SUCCESS,
data,
});

export const fetchUpdateStudentFailure = (error) => ({
type: FETCH_UPDATE_STUDENT_FAILURE,
error,
});

export const fetchUpdateStudent = (formData, id) => (dispatch) => {

dispatch(fetchUpdateStudentRequest());
const config = {
    headers: {
    Authorization: localStorage.getItem("userAccessToken"),
},
};

return axios
    .patch(`https://student-info-feathers.herokuapp.com/student/${id}`, formData, config)
    .then((data) => {
        apiToastSuccess("Updated Successfully")
    dispatch(fetchUpdateStudentSuccess(data));
    })
    .catch((error) => {
        apiToastError(error.response.data.message)
    dispatch(fetchUpdateStudentFailure(error));
    });
};
