import db from '../models'

// Get all category
export const getCategoryService = async () => {
    try {
        const response = await db.Category.findAll({
            raw: true
        })
        return {
            err: response ? 0 : 1,
            msg: response ? 'OK' : 'Failed to get category',
            response
        }
    } catch (error) {
        throw error
    }
}