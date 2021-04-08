import {
    FETCH_STANDARD_LIST_REQUEST,
    FETCH_STANDARD_LIST_SUCCESS,
    FETCH_STANDARD_LIST_FAILURE,
    } from '../../Types/Standard/types';
    
    const initialState = {
    data: null,
    error: null,
    isLoading: false,
    };
    
    const StandardList = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_STANDARD_LIST_REQUEST:
        return {
            ...state,
            isLoading: true,
        };
        case FETCH_STANDARD_LIST_SUCCESS:
        return {
            ...state,
            isLoading: false,
            data: action.data.data,
            error: null,
        };
        case FETCH_STANDARD_LIST_FAILURE:
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
    
    export default StandardList;
    