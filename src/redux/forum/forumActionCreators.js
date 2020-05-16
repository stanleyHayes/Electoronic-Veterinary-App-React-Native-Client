import {
    GET_INTERESTED_TOPICS_FAILURE,
    GET_INTERESTED_TOPICS_REQUEST,
    GET_INTERESTED_TOPICS_SUCCESS,
    GET_MY_TOPICS_FAILURE,
    GET_MY_TOPICS_REQUEST,
    GET_MY_TOPICS_SUCCESS,
    GET_RECENT_TOPICS_FAILURE,
    GET_RECENT_TOPICS_REQUEST,
    GET_RECENT_TOPICS_SUCCESS,
    GET_TOPICS_FAILURE,
    GET_TOPICS_REQUEST,
    GET_TOPICS_SUCCESS,
} from './forumActionTypes';

import axios from "axios";


function getInterestedTopicsRequest() {
    return {
        type: GET_INTERESTED_TOPICS_REQUEST
    }
}

function getInterestedTopicsSuccess(topics) {
    return {
        type: GET_INTERESTED_TOPICS_SUCCESS,
        payload: topics
    }
}

function getInterestedTopicsError(error) {
    return {
        type: GET_INTERESTED_TOPICS_FAILURE,
        payload: error
    }
}

function getInterestedTopics(userID, token) {
    return function (dispatch) {
        dispatch(getInterestedTopicsRequest())
        axios({
            method: "get",
            url: `http://localhost:8000/api/v1/users/${userID}topics?interested=true`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(function (response) {
            dispatch(getInterestedTopicsSuccess(response.data.data));
        }).catch(function (error) {
            dispatch(getInterestedTopicsError(error.response.data.error))
        })
    }
}


function getMyTopicsRequest() {
    return {
        type: GET_MY_TOPICS_REQUEST
    }
}

function getMyTopicsSuccess(topics) {
    return {
        type: GET_MY_TOPICS_SUCCESS,
        payload: topics
    }
}

function getMyTopicsError(error) {
    return {
        type: GET_MY_TOPICS_FAILURE,
        payload: error
    }
}

function getMyTopics(userID, token) {
    return function (dispatch) {
        dispatch(getMyTopicsRequest())
        axios({
            method: "get",
            url: `http://localhost:8000/api/v1/users/${userID}topics`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(function (response) {
            dispatch(getMyTopicsSuccess(response.data.data));
        }).catch(function (error) {
            dispatch(getMyTopicsError(error.response.data.error))
        })
    }
}



function getRecentTopicsRequest() {
    return {
        type: GET_RECENT_TOPICS_REQUEST
    }
}

function getRecentTopicsSuccess(topics) {
    return {
        type: GET_RECENT_TOPICS_SUCCESS,
        payload: topics
    }
}

function getRecentTopicsError(error) {
    return {
        type: GET_RECENT_TOPICS_FAILURE,
        payload: error
    }
}

function getRecentTopics(userID, token) {
    return function (dispatch) {
        dispatch(getRecentTopicsRequest())
        axios({
            method: "get",
            url: `http://localhost:8000/api/v1/topics?recent=true`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(function (response) {
            dispatch(getRecentTopicsSuccess(response.data.data));
        }).catch(function (error) {
            dispatch(getRecentTopicsError(error.response.data.error))
        })
    }
}



function getTopicsRequest() {
    return {
        type: GET_TOPICS_REQUEST
    }
}

function getTopicsSuccess(topics) {
    return {
        type: GET_TOPICS_SUCCESS,
        payload: topics
    }
}

function getTopicsError(error) {
    return {
        type: GET_TOPICS_FAILURE,
        payload: error
    }
}

function getTopics(userID, token) {
    return function (dispatch) {
        dispatch(getTopicsRequest())
        axios({
            method: "get",
            url: `http://localhost:8000/api/v1/topics`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(function (response) {
            dispatch(getTopicsSuccess(response.data.data));
        }).catch(function (error) {
            dispatch(getTopicsError(error.response.data.error))
        })
    }
}
