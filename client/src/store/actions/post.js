import actionTypes from "./actionTypes"
import { apiGetPosts, apiGetLimitPosts } from "../../services/post"

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

export const getLimitPosts = (page) => async (dispatch) => {
    try {
        const response = await apiGetLimitPosts(page)
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