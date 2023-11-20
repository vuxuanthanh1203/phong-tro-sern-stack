import db from '../models'
import bcrypt from 'bcryptjs'
import { v4 } from 'uuid'
require('dotenv').config()

import choThueCanHo from '../../data/chothuecanho.json'
import choThueMatBang from '../../data/chothuematbang.json'
import choThuePhongTro from '../../data/chothuephongtro.json'
import nhaChoThue from '../../data/nhachothue.json'

import generateCode from '../ultis/generateCode'

const dataBody = nhaChoThue.body

const hashPassword = (password) => bcrypt.hashSync(password, 10)

export const insertService = () => new Promise(async (resolve, reject) => {
    try {
        dataBody.forEach(async (item) => {
            const postId = v4()
            const labelCode = generateCode(4)
            const attributesId = v4()
            const userId = v4()
            const imagesId = v4()
            const overviewId = v4()
            await db.Post.create({
                id: postId,
                title: item?.header?.title,
                star: item?.header?.star,
                labelCode,
                address: item?.header?.address,
                attributesId,
                categoryCode: 'NCT',
                description: JSON.stringify(item?.header?.content),
                userId,
                overviewId,
                imagesId
            })
            await db.Attribute.create({
                id: attributesId,
                price: item?.header?.attributes?.price,
                acreage: item?.header?.attributes?.acreage,
                published: item?.header?.attributes?.published,
                hashtag: item?.header?.attributes?.hashtag
            })
            await db.Image.create({
                id: imagesId,
                image: JSON.stringify(item?.images)
            })
            await db.Label.create({
                code: labelCode,
                value: item?.header?.class?.classType
            })
            await db.Overview.create({
                id: overviewId,
                code: item?.overview?.content.find(i => i.name === "Mã tin:")?.content,
                area: item?.overview?.content.find(i => i.name === "Khu vực:")?.content,
                type: item?.overview?.content.find(i => i.name === "Loại tin rao:")?.content,
                target: item?.overview?.content.find(i => i.name === "Đối tượng thuê:")?.content,
                bonus: item?.overview?.content.find(i => i.name === "Gói tin:")?.content,
                created: item?.overview?.content.find(i => i.name === "Ngày đăng:")?.content,
                expired: item?.overview?.content.find(i => i.name === "Ngày hết hạn:")?.content,
            })
            await db.User.create({
                id: userId,
                name: item?.contact?.content?.find(i => i.name === "Liên hệ:")?.content,
                password: hashPassword('123456'),
                phone: item?.contact?.content?.find(i => i.name === "Liên hệ:")?.content,
                zalo: item?.contact?.content?.find(i => i.name === "Liên hệ:")?.content,
            })
        })

        resolve('Insert data completed !')

    } catch (error) {
        reject(error)
    }
})
