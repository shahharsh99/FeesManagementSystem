import {
FETCH_ADD_STANDARD_REQUEST,
FETCH_ADD_STANDARD_SUCCESS,
FETCH_ADD_STANDARD_FAILURE,
} from '../../Types/Standard/types';

const initialState = {
data: null,
error: null,
isLoading: false,
};

const AddStandardReducer = (state = initialState, action) => {
switch (action.type) {
    case FETCH_ADD_STANDARD_REQUEST:
    return {
        ...state,
        isLoading: true,
    };
    case FETCH_ADD_STANDARD_SUCCESS:
    return {
        ...state,
        isLoading: false,
        data: action.data.data,
        error: null,
    };
    case FETCH_ADD_STANDARD_FAILURE:
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

export default AddStandardReducer;
