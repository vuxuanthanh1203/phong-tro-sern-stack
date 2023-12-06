import actionTypes from "../actions/actionTypes";

const initState = {
    msg: '',
    categories: [],
    prices: [],
    acreages: [],
    provinces: [],
}

const appReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_CATEGORIES:
            return {
                ...state,
                categories: action.categories || [],
                msg: action.msg || ''
            }
        case actionTypes.GET_PRICE:
            return {
                ...state,
                prices: action.prices || [],
                msg: action.msg || ''
            }
        case actionTypes.GET_ACREAGE:
            return {
                ...state,
                acreages: action.acreages || [],
                msg: action.msg || ''
            }
        case actionTypes.GET_PROVINCE:
            return {
                ...state,
                provinces: action.provinces || [],
                msg: action.msg || ''
            }


        default:
            return state;
    }
}

export default appReducer