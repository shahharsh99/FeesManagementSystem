import {
    FETCH_STUDENT_FROM_STANDARD_REQUEST,
    FETCH_STUDENT_FROM_STANDARD_SUCCESS,
    FETCH_STUDENT_FROM_STANDARD_FAILURE,
    } from "../../Types/FeesEvaluation/types";
    import axios from "axios";
    
    export const fetchStudentFromStandardRequest = () => ({
    type: FETCH_STUDENT_FROM_STANDARD_REQUEST,
    });
    
    export const fetchStudentFromStandardSuccess = (data) => ({
    type: FETCH_STUDENT_FROM_STANDARD_SUCCESS,
    data,
    });
    
    export const fetchStudentFromStandardFailure = (error) => ({
    type: FETCH_STUDENT_FROM_STANDARD_FAILURE,
    error,
    });
    
    export const fetchStudentFromStandard = (id) => (dispatch) => {
    
    dispatch(fetchStudentFromStandardRequest());
    const config = {
        headers: {
        Authorization: localStorage.getItem("userAccessToken"),
    },
    };
    
    return axios
        .get(`https://student-info-feathers.herokuapp.com/student?standardID=${id}&$populate=standardID`,  config)
        .then((data) => {
        dispatch(fetchStudentFromStandardSuccess(data));
        })
        .catch((error) => {
        dispatch(fetchStudentFromStandardFailure(error));
        });
    };
    