import db from '../models'

// Get all province
export const getProvinceService = async () => {
    try {
        const response = await db.Province.findAll({
            raw: true,
            attributes: ['code', 'value']
        })
        return {
            err: response ? 0 : 1,
            msg: response ? 'OK' : 'Failed to get province',
            response
        }
    } catch (error) {
        throw error
    }
}