import {
    FETCH_STANDARD_DETAIL_REQUEST,
    FETCH_STANDARD_DETAIL_SUCCESS,
    FETCH_STANDARD_DETAIL_FAILURE,
} from '../../Types/Standard/types'

const initialState = {
    data: null,
    error: null,
    isLoading: false,
};

const StandardDetailReducer = (state = initialState, action) => {
    switch (action.type) {
    case FETCH_STANDARD_DETAIL_REQUEST:
        return {
        ...state,
        isLoading: true,
        };
    case FETCH_STANDARD_DETAIL_SUCCESS:
        return {
        ...state,
        isLoading: false,
        data: action.data.data,
        error: null,
        };
    case FETCH_STANDARD_DETAIL_FAILURE:
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

export default StandardDetailReducer;
