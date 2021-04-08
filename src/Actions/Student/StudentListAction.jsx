import {
    FETCH_STUDENT_LIST_REQUEST,
    FETCH_STUDENT_LIST_SUCCESS,
    FETCH_STUDENT_LIST_FAILURE,
    } from "../../Types/Student/types";
    import axios from "axios";
    
    export const fetchStudentListRequest = () => ({
    type: FETCH_STUDENT_LIST_REQUEST,
    });
    
    export const fetchStudentListSuccess = (data) => ({
    type: FETCH_STUDENT_LIST_SUCCESS,
    data,
    });
    
    export const fetchStudentListFailure = (error) => ({
    type: FETCH_STUDENT_LIST_FAILURE,
    error,
    });
    
    export const fetchStudentList = (formData) => (dispatch) => {
    const passVal = {
        ...formData,
    };
    
    dispatch(fetchStudentListRequest());
const config = {
    headers: {
    Authorization: localStorage.getItem("userAccessToken"),
},
};
    
    return axios
        .get('https://student-info-feathers.herokuapp.com/student',config)
        .then((data) => {
        dispatch(fetchStudentListSuccess(data));
        })
        .catch((error) => {
        dispatch(fetchStudentListFailure(error));
        });
    };
    