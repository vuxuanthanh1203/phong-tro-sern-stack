import db from '../models'

// Get all category
export const getAcreageService = () => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Acreage.findAll({
            raw: true,
            attributes: ['code', 'value']
        })
        resolve({
            err: response ? 0 : 1,
            msg: response ? 'OK' : 'Failed to get acreage',
            response
        })
    } catch (error) {
        reject(error)
    }
})