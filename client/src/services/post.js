import axiosConfig from '../axiosConfig'

export const apiGetPosts = () => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: '/api/v1/post/all'
        })
        resolve(response)

    } catch (error) {
        reject(error)
    }
})

export const apiGetLimitPosts = (page) => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: `/api/v1/posts/post?page=${page}`
        })
        resolve(response)

    } catch (error) {
        reject(error)
    }
})