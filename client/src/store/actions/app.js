import * as api from '../../services';

import actionTypes from "./actionTypes";

export const getCategories = () => async (dispatch) => {
    try {
        const response = await api.apiGetCategory()

        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_CATEGORIES,
                categories: response.data.response
            })
        } else {
            dispatch({
                type: actionTypes.GET_CATEGORIES,
                msg: response.data.msg,
                categories: null
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_CATEGORIES,
            categories: null
        })
    }
}

export const getPrices = () => async (dispatch) => {
    try {
        const response = await api.apiGetPrice()

        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_PRICE,
                prices: response.data.response
            })
        } else {
            dispatch({
                type: actionTypes.GET_PRICE,
                msg: response.data.msg,
                prices: null
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_PRICE,
            prices: null
        })
    }
}

export const getAcreage = () => async (dispatch) => {
    try {
        const response = await api.apiGetAcreage()

        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_ACREAGE,
                acreages: response.data.response
            })
        } else {
            dispatch({
                type: actionTypes.GET_ACREAGE,
                msg: response.data.msg,
                acreages: null
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_ACREAGE,
            acreages: null
        })
    }
}