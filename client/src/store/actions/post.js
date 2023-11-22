import actionTypes from "./actionTypes"
import { apiGetPosts } from "../../services/post"

export const getPosts = () => async (dispatch) => {
    try {
        const response = await apiGetPosts()
        // console.log(response.data.res);
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_POSTS,
                posts: response.data.res
            })
        } else {
            dispatch({
                type: actionTypes.REGISTER_FAIL,
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