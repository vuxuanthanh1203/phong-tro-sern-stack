import db from '../models'

// Get all category
export const getAcreageService = async () => {
    try {
        const response = await db.Acreage.findAll({
            raw: true,
            attributes: ['code', 'value']
        })
        return {
            err: response ? 0 : 1,
            msg: response ? 'OK' : 'Failed to get acreage',
            response
        }
    } catch (error) {
        throw error
    }
}