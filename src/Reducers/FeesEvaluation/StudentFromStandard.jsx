import {
    FETCH_STUDENT_FROM_STANDARD_REQUEST,
    FETCH_STUDENT_FROM_STANDARD_SUCCESS,
    FETCH_STUDENT_FROM_STANDARD_FAILURE,
    } from '../../Types/FeesEvaluation/types';
    
    const initialState = {
    data: null,
    error: null,
    isLoading: false,
    };
    
    const StudentFromStandardReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_STUDENT_FROM_STANDARD_REQUEST:
        return {
            ...state,
            isLoading: true,
        };
        case FETCH_STUDENT_FROM_STANDARD_SUCCESS:
        return {
            ...state,
            isLoading: false,
            data: action.data.data,
            error: null,
        };
        case FETCH_STUDENT_FROM_STANDARD_FAILURE:
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
    
    export default StudentFromStandardReducer;
    