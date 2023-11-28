import db from '../models'

// Get all category
export const getPriceService = () => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Price.findAll({
            raw: true,
            attributes: ['code', 'value']
        })
        resolve({
            err: response ? 0 : 1,
            msg: response ? 'OK' : 'Failed to get price',
            response
        })
    } catch (error) {
        reject(error)
    }
})