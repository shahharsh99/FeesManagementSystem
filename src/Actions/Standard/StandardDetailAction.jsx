import {
FETCH_STANDARD_DETAIL_REQUEST,
FETCH_STANDARD_DETAIL_SUCCESS,
FETCH_STANDARD_DETAIL_FAILURE,
} from "../../Types/Standard/types";
import axios from "axios";

export const fetchStandardDetailRequest = () => ({
type: FETCH_STANDARD_DETAIL_REQUEST,
});

export const fetchStandardDetailSuccess = (data) => ({
type: FETCH_STANDARD_DETAIL_SUCCESS,
data,
});

export const fetchStandardDetailFailure = (error) => ({
type: FETCH_STANDARD_DETAIL_FAILURE,
error,
});

export const fetchStandardDetail = (id) => (dispatch) => {

dispatch(fetchStandardDetailRequest());
const config = {
    headers: {
    Authorization: localStorage.getItem("userAccessToken"),
},
};

return axios
    .get(`https://student-info-feathers.herokuapp.com/standard/${id}`, config)
    .then((data) => {
        console.log("data from action",data)
    dispatch(fetchStandardDetailSuccess(data));
    })
    .catch((error) => {
    dispatch(fetchStandardDetailFailure(error));
    });
};
