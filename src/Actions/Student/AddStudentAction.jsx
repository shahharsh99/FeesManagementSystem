import {
    FETCH_ADD_STUDENT_REQUEST,
    FETCH_ADD_STUDENT_SUCCESS,
    FETCH_ADD_STUDENT_FAILURE,
} from "../../Types/Student/types";
import { apiToastError, apiToastSuccess } from "../../util/util";
import axios from "axios";

export const fetchAddStudentRequest = () => ({
type: FETCH_ADD_STUDENT_REQUEST,
});

export const fetchAddStudentSuccess = (data) => ({
type: FETCH_ADD_STUDENT_SUCCESS,
data,
});

export const fetchAddStudentFailure = (error) => ({
type: FETCH_ADD_STUDENT_FAILURE,
error,
});

export const fetchAddStudent = (formData) => (dispatch) => {

dispatch(fetchAddStudentRequest());
const config = {
    headers: {
    Authorization: localStorage.getItem("userAccessToken"),
},
};

return axios
    .post('https://student-info-feathers.herokuapp.com/student', formData, config)
    .then((data) => {
        console.log("data from action----------",data)
        apiToastSuccess("Added Successfully")

    dispatch(fetchAddStudentSuccess(data));
    })
    .catch((error) => {
        apiToastError(error.response.data.message)
    dispatch(fetchAddStudentFailure(error));
    });
};
