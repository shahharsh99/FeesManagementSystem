import {
    FETCH_TOTAL_FEES_REQUEST,
    FETCH_TOTAL_FEES_SUCCESS,
    FETCH_TOTAL_FEES_FAILURE,
    } from "../../Types/Dashboard/types";
    import axios from "axios";
    
    export const fetchTotalFeesRequest = () => ({
    type: FETCH_TOTAL_FEES_REQUEST,
    });
    
    export const fetchTotalFeesSuccess = (data) => ({
    type: FETCH_TOTAL_FEES_SUCCESS,
    data,
    });
    
    export const fetchTotalFeesFailure = (error) => ({
    type: FETCH_TOTAL_FEES_FAILURE,
    error,
    });
    
    export const fetchTotalFees = () => (dispatch) => {
    
    dispatch(fetchTotalFeesRequest());
    const config = {
        headers: {
        Authorization: localStorage.getItem("userAccessToken"),
    },
    };
    
    return axios
        .get(`https://student-info-feathers.herokuapp.com/student?feesSubmitted=true&$populate=standardID`,config)
        .then((data) => {
        dispatch(fetchTotalFeesSuccess(data));
        })
        .catch((error) => {
        dispatch(fetchTotalFeesFailure(error));
        });
    };
    