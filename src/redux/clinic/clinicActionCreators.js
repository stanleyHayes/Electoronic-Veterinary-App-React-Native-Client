import {
    GET_CLINICS_FAILURE,
    GET_CLINICS_REQUEST,
    GET_CLINICS_SUCCESS,
    GET_NEARBY_CLINICS_FAILURE,
    GET_NEARBY_CLINICS_REQUEST,
    GET_NEARBY_CLINICS_SUCCESS,
    GET_POPULAR_CLINICS_FAILURE,
    GET_POPULAR_CLINICS_REQUEST,
    GET_POPULAR_CLINICS_SUCCESS,
} from './clinicActionTypes';

import axios from "axios";

function getClinicsRequest() {
    return {
        type: GET_CLINICS_REQUEST
    }
}

function getClinicsFailure(error) {
    return {
        type: GET_CLINICS_FAILURE,
        payload: error
    }
}

function getClinicsSuccess(clinics) {
    return {
        type: GET_CLINICS_SUCCESS,
        payload: clinics
    }
}

function getClinics(token) {
    return function (dispatch) {
        dispatch(getClinicsRequest());
        axios({
            method: "get",
            url: `http://localhost:8000/api/v1/clinics`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(function (response) {
            dispatch(getClinicsSuccess(response.data.data));
        }).catch(function (error) {
            dispatch(getClinicsFailure(error.response.data.error));
        })
    }
}


function getNearbyClinicsRequest() {
    return {
        type: GET_NEARBY_CLINICS_REQUEST
    }
}

function getNearbyClinicsFailure(error) {
    return {
        type: GET_NEARBY_CLINICS_FAILURE,
        payload: error
    }
}

function getNearbyClinicsSuccess(clinics) {
    return {
        type: GET_NEARBY_CLINICS_SUCCESS,
        payload: clinics
    }
}

function getNearbyClinics(token) {
    return function (dispatch) {
        dispatch(getNearbyClinicsRequest());
        axios({
            method: "get",
            url: `http://localhost:8000/api/v1/clinics`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(function (response) {
            dispatch(getNearbyClinicsSuccess(response.data.data));
        }).catch(function (error) {
            dispatch(getNearbyClinicsFailure(error.response.data.error));
        })
    }
}


function getPopularClinicsRequest() {
    return {
        type: GET_POPULAR_CLINICS_REQUEST
    }
}

function getPopularClinicsFailure(error) {
    return {
        type: GET_POPULAR_CLINICS_FAILURE,
        payload: error
    }
}

function getPopularClinicsSuccess(clinics) {
    return {
        type: GET_POPULAR_CLINICS_SUCCESS,
        payload: clinics
    }
}

function getPopularClinics(token) {
    return function (dispatch) {
        dispatch(getPopularClinicsRequest());
        axios({
            method: "get",
            url: `http://localhost:8000/api/v1/clinics`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(function (response) {
            dispatch(getPopularClinicsSuccess(response.data.data));
        }).catch(function (error) {
            dispatch(getPopularClinicsFailure(error.response.data.error));
        })
    }
}
