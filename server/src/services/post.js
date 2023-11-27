import db from '../models'

export const getPostsService = () => new Promise(async (resolve, reject) => {
    try {
        const res = await db.Post.findAll({
            raw: true,
            nest: true,
            include: [
                { model: db.Image, as: 'images', attributes: ['image'] },
                { model: db.Attribute, as: 'attributes', attributes: ['price', 'acreage', 'published', 'hashtag'] },
                { model: db.User, as: 'user', attributes: ['name', 'phone', 'zalo'] }
            ],
            attributes: ['id', 'title', 'star', 'address', 'description']
        })

        resolve({
            err: res ? 0 : 1,
            msg: res ? 'OK' : 'Getting Post failed !',
            res
        })
    } catch (error) {
        reject(error)
    }
})

export const getLimitPostsService = (page) => new Promise(async (resolve, reject) => {
    const limit = 5
    let offset = page ? (page - 1) * limit : 0
    try {
        const res = await db.Post.findAndCountAll({
            raw: true,
            nest: true,
            include: [
                { model: db.Image, as: 'images', attributes: ['image'] },
                { model: db.Attribute, as: 'attributes', attributes: ['price', 'acreage', 'published', 'hashtag'] },
                { model: db.User, as: 'user', attributes: ['name', 'phone', 'zalo'] }
            ],
            attributes: ['id', 'title', 'star', 'address', 'description'],
            offset,
            limit
        })

        resolve({
            err: res ? 0 : 1,
            msg: res ? 'OK' : 'Getting Post failed !',
            res
        })
    } catch (error) {
        reject(error)
    }
})