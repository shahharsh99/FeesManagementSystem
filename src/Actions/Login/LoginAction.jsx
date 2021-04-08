import {
    FETCH_LOGIN_REQUEST,
    FETCH_LOGIN_SUCCESS,
    FETCH_LOGIN_FAILURE,
} from "../../Types/Login/types";
import axios from "axios";
import { apiToastError, apiToastSuccess } from "../../util/util";

export const fetchLoginRequest = () => ({
    type: FETCH_LOGIN_REQUEST,
});

export const fetchLoginSuccess = (data) => ({
    type: FETCH_LOGIN_SUCCESS,
    data,
});

export const fetchLoginFailure = (error) => ({
    type: FETCH_LOGIN_FAILURE,
    error,
});

export const fetchLogin = (formData) => (dispatch) => {
    dispatch(fetchLoginRequest());

    return axios
    .post('https://student-info-feathers.herokuapp.com/authentication', formData)
    .then((data) => {
        if (data?.data?.accessToken) {
        localStorage.setItem("userAccessToken", data.data.accessToken);
        }
        apiToastSuccess("LoggedIn Successfully")
        dispatch(fetchLoginSuccess(data));
    })
    .catch((error) => {
        apiToastError(error.response.data.message)
        dispatch(fetchLoginFailure(error));
    });
};
