import db from '../models'
import bcrypt from 'bcryptjs'
import { v4 } from 'uuid'
require('dotenv').config()

import choThueCanHo from '../../data/chothuecanho.json'
import choThueMatBang from '../../data/chothuematbang.json'
import choThuePhongTro from '../../data/chothuephongtro.json'
import nhaChoThue from '../../data/nhachothue.json'
import { dataPrice, dataAcreage } from '../ultis/insertData'
import { getNumberFromString } from '../ultis/common'


import generateCode from '../ultis/generateCode'

const dataBody = choThuePhongTro.body

const hashPassword = (password) => bcrypt.hashSync(password, 10)

export const insertService = () => new Promise(async (resolve, reject) => {
    try {
        dataBody.forEach(async (item) => {
            const postId = v4()
            const labelCode = generateCode(item?.header?.class?.classType)
            const attributesId = v4()
            const userId = v4()
            const imagesId = v4()
            const overviewId = v4()
            const currentAcreage = getNumberFromString(item?.header?.attributes?.acreage)
            const currentPrice = getNumberFromString(item?.header?.attributes?.price)
            await db.Post.create({
                id: postId,
                title: item?.header?.title,
                star: item.header?.star,
                labelCode,
                address: item?.header?.address,
                attributesId,
                categoryCode: 'NCT',
                description: JSON.stringify(item?.mainContent?.content),
                userId,
                overviewId,
                imagesId,
                acreageCode: dataAcreage.find(acreage => acreage.max > currentAcreage && acreage.min <= currentAcreage)?.code,
                priceCode: dataPrice.find(price => price.max > currentPrice && price.min <= currentPrice)?.code,
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
            await db.Label.findOrCreate({
                where: { code: labelCode },
                defaults: {
                    code: labelCode,
                    value: item?.header?.class?.classType
                }
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
                phone: item?.contact?.content?.find(i => i.name === "Điện thoại:")?.content,
                zalo: item?.contact?.content?.find(i => i.name === "Zalo:")?.content,
            })
        })

        resolve('Insert data completed !')

    } catch (error) {
        reject(error)
    }
})

export const createPricesAndAcreage = () => new Promise((resolve, reject) => {
    try {
        dataPrice.forEach(async (item, index) => {
            await db.Price.create({
                code: item.code,
                value: item.value,
                order: index + 1
            })
        })
        dataAcreage.forEach(async (item, index) => {
            await db.Acreage.create({
                code: item.code,
                value: item.value,
                order: index + 1
            })
        })
        resolve('OK')
    } catch (err) {
        reject(err)
    }
})
