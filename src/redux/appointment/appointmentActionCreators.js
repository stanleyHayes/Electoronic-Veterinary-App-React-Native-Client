import {
    CREATE_APPOINTMENT_FAILURE,
    CREATE_APPOINTMENT_REQUEST,
    CREATE_APPOINTMENT_SUCCESS,
    DELETE_APPOINTMENT_FAILURE,
    DELETE_APPOINTMENT_REQUEST,
    DELETE_APPOINTMENT_SUCCESS,
    GET_APPOINTMENT_FAILURE,
    GET_APPOINTMENT_REQUEST,
    GET_APPOINTMENT_SUCCESS,
    GET_APPOINTMENTS_FAILURE,
    GET_APPOINTMENTS_REQUEST,
    GET_APPOINTMENTS_SUCCESS,
    UPDATE_APPOINTMENT_FAILURE,
    UPDATE_APPOINTMENT_REQUEST,
    UPDATE_APPOINTMENT_SUCCESS,
} from './appointmentActionTypes';

import axios from "axios";

export const getAppointmentsRequest = function () {
    return {
        type: GET_APPOINTMENTS_REQUEST
    }
}

export const getAppointmentsSuccess = function (appointments) {
    return {
        type: GET_APPOINTMENTS_REQUEST,
        payload: appointments
    }
}

export const getAppointmentsFailure = function (error) {
    return {
        type: GET_APPOINTMENTS_REQUEST,
        payload: error
    }
}

export const getAppointments = function (userID, token) {
    return function (dispatch) {
        dispatch(getAppointmentsRequest());

        axios({
            method: "get",
            url: `http://localhost:8000/api/v1/users/${userID}/appointments`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(function (response) {
            dispatch(getAppointmentsSuccess(response.data.data))
        }).catch(function (error) {
            dispatch(getAppointmentsFailure(error.response.data.error));
        })
    }
}
