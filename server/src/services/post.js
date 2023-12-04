import db from '../models'
import { getFirstProperty } from '../ultis/getFirstProperty'

export const getPostsService = async () => {
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

        return {
            err: res ? 0 : 1,
            msg: res ? 'OK' : 'Getting Post failed !',
            res
        }
    } catch (error) {
        throw error;
    }
}

export const getLimitPostsService = async ({ page, ...params }) => {
    const limit = 5;
    const offset = page ? (page - 1) * limit : 0;

    try {
        const res = await db.Post.findAndCountAll({
            where: params,
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
        });

        return {
            err: res ? 0 : 1,
            msg: res ? 'OK' : 'Getting Post failed !',
            res
        };
    } catch (error) {
        throw error;
    }
};


export const getNewPostsService = async () => {

    try {
        const res = await db.Post.findAll({
            raw: true,
            nest: true,
            order: [['createdAt', 'DESC']],
            include: [
                { model: db.Image, as: 'images', attributes: ['image'] },
                { model: db.Attribute, as: 'attributes', attributes: ['price', 'acreage', 'published', 'hashtag'] },
            ],
            attributes: ['id', 'title', 'star', 'createdAt'],
            limit: 7
        })

        return {
            err: res ? 0 : 1,
            msg: res ? 'OK' : 'Getting Post failed !',
            res
        }
    } catch (error) {
        throw error;
    }
}