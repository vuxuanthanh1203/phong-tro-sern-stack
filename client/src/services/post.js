import axiosConfig from '../axiosConfig'

export const apiGetPosts = () => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: '/api/v1/posts/all'
        })
        resolve(response)

    } catch (error) {
        reject(error)
    }
})

export const apiGetLimitPosts = (params) => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: `/api/v1/posts/post`,
            params: params
        })
        resolve(response)

    } catch (error) {
        reject(error)
    }
})

export const apiGetNewPosts = () => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: '/api/v1/posts/new-posts'
        })
        resolve(response)

    } catch (error) {
        reject(error)
    }
})