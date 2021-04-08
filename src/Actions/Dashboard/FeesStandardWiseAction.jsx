import {
    FETCH_TOTAL_FEES_STANDARD_WISE_REQUEST,
    FETCH_TOTAL_FEES_STANDARD_WISE_SUCCESS,
    FETCH_TOTAL_FEES_STANDARD_WISE_FAILURE,
    } from "../../Types/Dashboard/types";
    import axios from "axios";
    
    export const fetchTotalFeesStandardWiseRequest = () => ({
    type: FETCH_TOTAL_FEES_STANDARD_WISE_REQUEST,
    });
    
    export const fetchTotalFeesStandardWiseSuccess = (data) => ({
    type: FETCH_TOTAL_FEES_STANDARD_WISE_SUCCESS,
    data,
    });
    
    export const fetchTotalFeesStandardWiseFailure = (error) => ({
    type: FETCH_TOTAL_FEES_STANDARD_WISE_FAILURE,
    error,
    });
    
    export const fetchTotalFeesStandardWise = (id) => (dispatch) => {
    
    dispatch(fetchTotalFeesStandardWiseRequest());
    const config = {
        headers: {
        Authorization: localStorage.getItem("userAccessToken"),
    },
    };
    
    return axios
        .get(`https://student-info-feathers.herokuapp.com/student?standardID=${id}&feesSubmitted=true&$populate=standardID&$select=fees`,config)
        .then((data) => {
        dispatch(fetchTotalFeesStandardWiseSuccess(data));
        })
        .catch((error) => {
        dispatch(fetchTotalFeesStandardWiseFailure(error));
        });
    };
    