import axiosConfig from '../axiosConfig'

export const apiGetPosts = async () => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: '/api/v1/posts/all'
        })
        return response

    } catch (error) {
        throw error
    }
}

export const apiGetLimitPosts = async (params) => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: `/api/v1/posts/post`,
            params: params
        })
        return response

    } catch (error) {
        throw error
    }
}

export const apiGetNewPosts = async () => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: '/api/v1/posts/new-posts'
        })
        return response

    } catch (error) {
        throw error
    }
}