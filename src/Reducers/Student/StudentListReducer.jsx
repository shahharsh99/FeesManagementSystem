import {
    FETCH_STUDENT_LIST_REQUEST,
    FETCH_STUDENT_LIST_SUCCESS,
    FETCH_STUDENT_LIST_FAILURE,
    } from '../../Types/Student/types';
    
    const initialState = {
    data: null,
    error: null,
    isLoading: false,
    };
    
    const StudentList = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_STUDENT_LIST_REQUEST:
        return {
            ...state,
            isLoading: true,
        };
        case FETCH_STUDENT_LIST_SUCCESS:
        return {
            ...state,
            isLoading: false,
            data: action.data.data,
            error: null,
        };
        case FETCH_STUDENT_LIST_FAILURE:
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
    
    export default StudentList;
    