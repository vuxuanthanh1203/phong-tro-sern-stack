import axiosConfig from '../axiosConfig'

export const apiGetPrice = async () => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: '/api/v1/price/all'
        })
        return response

    } catch (error) {
        throw error
    }
}

export const apiGetAcreage = async () => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: '/api/v1/acreage/all'
        })
        return response

    } catch (error) {
        throw error
    }
}