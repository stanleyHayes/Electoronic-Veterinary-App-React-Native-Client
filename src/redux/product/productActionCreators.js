import {
    CREATE_PRODUCT_FAILURE,
    CREATE_PRODUCT_REQUEST,
    CREATE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAILURE,
    DELETE_PRODUCT_REQUEST,
    DELETE_PRODUCT_SUCCESS,
    GET_PRODUCTS_FAILURE,
    GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_SUCCESS,
    UPDATE_PRODUCT_FAILURE,
    UPDATE_PRODUCT_REQUEST,
    UPDATE_PRODUCT_SUCCESS,
} from './productActionTypes';

import axios from "axios";

function createProductRequest() {
    return {
        type: CREATE_PRODUCT_REQUEST
    }
}

function createProductSuccess(product) {
    return {
        type: CREATE_PRODUCT_SUCCESS,
        payload: product
    }
}

function createProductFailure(error) {
    return {
        type: CREATE_PRODUCT_FAILURE,
        payload: error
    }
}

function createProduct(token, product) {
    return function (dispatch) {
        dispatch(createProductRequest());
        axios({
            method: "post",
            url: `http://localhost:8000/api/v1/products`,
            headers: {
                Authorization: `Bearer ${token}`
            },
            data: product
        }).then(function (response) {
            dispatch(createProductSuccess(response.data.data));
        }).catch(function (error) {
            dispatch(createProductFailure(error.response.data.error));
        });
    }
}



function getProductsRequest() {
    return {
        type: GET_PRODUCTS_REQUEST
    }
}

function getProductsSuccess(products) {
    return {
        type: GET_PRODUCTS_SUCCESS,
        payload: products
    }
}

function getProductsFailure(error) {
    return {
        type: GET_PRODUCTS_FAILURE,
        payload: error
    }
}

function getProducts(token) {
    return function (dispatch) {
        dispatch(getProductsRequest());
        axios({
            method: "get",
            url: `http://localhost:8000/api/v1/products`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(function (response) {
            dispatch(getProductsSuccess(response.data.data));
        }).catch(function (error) {
            dispatch(getProductsFailure(error.response.data.error));
        });
    }
}


function updateProductRequest() {
    return {
        type: UPDATE_PRODUCT_REQUEST
    }
}

function updateProductSuccess(product) {
    return {
        type: UPDATE_PRODUCT_SUCCESS,
        payload: product
    }
}

function updateProductFailure(error) {
    return {
        type: UPDATE_PRODUCT_FAILURE,
        payload: error
    }
}

function updateProduct(token, productId, product) {
    return function (dispatch) {
        dispatch(updateProductRequest());
        axios({
            method: "post",
            url: `http://localhost:8000/api/v1/products/${productId}`,
            headers: {
                Authorization: `Bearer ${token}`
            },
            data: product
        }).then(function (response) {
            dispatch(updateProductSuccess(response.data.data));
        }).catch(function (error) {
            dispatch(updateProductFailure(error.response.data.error));
        });
    }
}



function deleteProductRequest() {
    return {
        type: DELETE_PRODUCT_REQUEST
    }
}

function deleteProductSuccess(product) {
    return {
        type: DELETE_PRODUCT_SUCCESS,
        payload: product
    }
}

function deleteProductFailure(error) {
    return {
        type: DELETE_PRODUCT_FAILURE,
        payload: error
    }
}

function deleteProduct(token, product) {
    return function (dispatch) {
        dispatch(deleteProductRequest());
        axios({
            method: "post",
            url: `http://localhost:8000/api/v1/products`,
            headers: {
                Authorization: `Bearer ${token}`
            },
            data: product
        }).then(function (response) {
            dispatch(deleteProductSuccess(response.data.data));
        }).catch(function (error) {
            dispatch(deleteProductFailure(error.response.data.error));
        });
    }
}
