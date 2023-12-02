import actionTypes from "./actionTypes"
import { apiGetPosts, apiGetLimitPosts, apiGetNewPosts } from "../../services/post"

export const getPosts = () => async (dispatch) => {
    try {
        const response = await apiGetPosts()
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_POSTS,
                posts: response.data.res
            })
        } else {
            dispatch({
                type: actionTypes.GET_POSTS,
                msg: response.data.msg
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_POSTS,
            posts: null
        })
    }
}

export const getLimitPosts = (params) => async (dispatch) => {
    try {
        const response = await apiGetLimitPosts(params)
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_LIMIT_POSTS,
                posts: response.data.res?.rows,
                counts: response.data.res?.count
            })
        } else {
            dispatch({
                type: actionTypes.GET_LIMIT_POSTS,
                msg: response.data.msg
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_LIMIT_POSTS,
            posts: null
        })
    }
}

export const getNewPosts = () => async (dispatch) => {
    try {
        const response = await apiGetNewPosts()
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_NEW_POSTS,
                newPosts: response.data.res
            })
        } else {
            dispatch({
                type: actionTypes.GET_NEW_POSTS,
                msg: response.data.msg,
                newPosts: null
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_NEW_POSTS,
            posts: null
        })
    }
}