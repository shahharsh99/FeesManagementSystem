import {
    FETCH_TOTAL_FEES_STANDARD_WISE_REQUEST,
    FETCH_TOTAL_FEES_STANDARD_WISE_SUCCESS,
    FETCH_TOTAL_FEES_STANDARD_WISE_FAILURE,
    } from '../../Types/Dashboard/types';
    
    const initialState = {
    data: null,
    error: null,
    isLoading: false,
    };
    
    const FeesStandardWiseReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TOTAL_FEES_STANDARD_WISE_REQUEST:
        return {
            ...state,
            isLoading: true,
        };
        case FETCH_TOTAL_FEES_STANDARD_WISE_SUCCESS:
        return {
            ...state,
            isLoading: false,
            data: action.data.data,
            error: null,
        };
        case FETCH_TOTAL_FEES_STANDARD_WISE_FAILURE:
        return {
            ...state,
            isLoading: false,
            data: null,
            error: action.error.response,
        };
        default:
        return state;
    }
    };
    
    export default FeesStandardWiseReducer;
    