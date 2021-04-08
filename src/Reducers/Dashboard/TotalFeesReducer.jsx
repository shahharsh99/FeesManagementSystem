import {
    FETCH_TOTAL_FEES_REQUEST,
    FETCH_TOTAL_FEES_SUCCESS,
    FETCH_TOTAL_FEES_FAILURE,
    } from '../../Types/Dashboard/types';
    
    const initialState = {
    data: null,
    error: null,
    isLoading: false,
    };
    
    const TotalFeesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TOTAL_FEES_REQUEST:
        return {
            ...state,
            isLoading: true,
        };
        case FETCH_TOTAL_FEES_SUCCESS:
        return {
            ...state,
            isLoading: false,
            data: action.data.data,
            error: null,
        };
        case FETCH_TOTAL_FEES_FAILURE:
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
    
    export default TotalFeesReducer;
    