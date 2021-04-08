import {
    FETCH_STANDARD_LIST_REQUEST,
    FETCH_STANDARD_LIST_SUCCESS,
    FETCH_STANDARD_LIST_FAILURE,
    } from "../../Types/Standard/types";
    import axios from "axios";
    
    export const fetchStandardListRequest = () => ({
    type: FETCH_STANDARD_LIST_REQUEST,
    });
    
    export const fetchStandardListSuccess = (data) => ({
    type: FETCH_STANDARD_LIST_SUCCESS,
    data,
    });
    
    export const fetchStandardListFailure = (error) => ({
    type: FETCH_STANDARD_LIST_FAILURE,
    error,
    });
    
    export const fetchStandardList = (formData) => (dispatch) => {
    const passVal = {
        ...formData,
    };
    
    dispatch(fetchStandardListRequest());
const config = {
    headers: {
    Authorization: localStorage.getItem("userAccessToken"),
},
};
    
    return axios
        .get('https://student-info-feathers.herokuapp.com/standard',config)
        .then((data) => {
        dispatch(fetchStandardListSuccess(data));
        })
        .catch((error) => {
        dispatch(fetchStandardListFailure(error));
        });
    };
    