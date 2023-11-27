import actionTypes from "../actions/actionTypes";

const initState = {
    posts: [],
    msg: '',
    counts: 0
}

const postReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_POSTS:
        case actionTypes.GET_LIMIT_POSTS:
            return {
                ...state,
                posts: action.posts || [],
                msg: action.msg || '',
                counts: action.counts || 0
            }


        default:
            return state;
    }
}

export default postReducer