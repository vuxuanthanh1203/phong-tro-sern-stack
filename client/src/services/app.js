import axiosConfig from '../axiosConfig'

export const apiGetPrice = () => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: '/api/v1/price/all'
        })
        resolve(response)

    } catch (error) {
        reject(error)
    }
})

export const apiGetAcreage = () => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: '/api/v1/acreage/all'
        })
        resolve(response)

    } catch (error) {
        reject(error)
    }
})