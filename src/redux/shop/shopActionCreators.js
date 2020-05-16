import {
    CREATE_SHOPS_FAILURE,
    CREATE_SHOPS_REQUEST,
    CREATE_SHOPS_SUCCESS,
    GET_SHOPS_FAILURE,
    GET_SHOPS_REQUEST,
    GET_SHOPS_SUCCESS,
} from './shopActionTypes';

import axios from "axios";

function getShopsRequest() {
    return {
        type: GET_SHOPS_REQUEST
    }
}

function getShopsSuccess(shops) {
    return {
        type: GET_SHOPS_SUCCESS,
        payload: shops
    }
}

function getShopsFailure(error) {
    return {
        type: GET_SHOPS_FAILURE
    }
}

function getShops(token) {
    return function (dispatch) {
        dispatch(getShopsRequest());
        axios({
            method: "get",
            url: `http://localhost:8000/api/v1/shops`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(function (response) {
            dispatch(getShopsSuccess(response.data.data));
        }).catch(function (error) {
            dispatch(getShopsFailure(error.response.data.error));
        });
    }
}
