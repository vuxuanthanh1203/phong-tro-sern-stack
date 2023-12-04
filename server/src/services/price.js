import db from '../models'

// Get all price
export const getPriceService = async () => {
    try {
        const response = await db.Price.findAll({
            raw: true,
            attributes: ['code', 'value']
        })
        return {
            err: response ? 0 : 1,
            msg: response ? 'OK' : 'Failed to get price',
            response
        }
    } catch (error) {
        throw error
    }
}