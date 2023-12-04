import db from '../models'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { v4 } from 'uuid'
require('dotenv').config()

const hashPassword = (password) => bcrypt.hashSync(password, 10)

export const registerService = async ({ name, phone, password }) => {

    try {
        const result = await db.User.findOrCreate({
            where: { phone },
            defaults: {
                name,
                phone,
                password: hashPassword(password),
                id: v4()
            }
        })

        const token = result[1] && jwt.sign(
            { id: result[0].id, phone: result[0].phone },
            process.env.SECRET_KEY,
            { expiresIn: '2d' }
        )

        return {
            err: token ? 0 : 2,
            msg: token ? "Register successfully !" : "Phone number already exists !!!",
            token: token || null
        }

    } catch (error) {
        throw error
    }
}

export const loginService = async ({ phone, password }) => {

    try {
        const result = await db.User.findOne({
            where: { phone },
            raw: true
        })

        const isCorrectPassword = result && bcrypt.compareSync(password, result.password)

        const token = isCorrectPassword && jwt.sign(
            { id: result.id, phone: result.phone },
            process.env.SECRET_KEY,
            { expiresIn: '2d' }
        )

        return {
            err: token ? 0 : 2,
            msg: token ? "Login successfully !" : result ? "Wrong password !!!" : "Phone number is not registered !!!",
            token: token || null
        }

    } catch (error) {
        throw error
    }
}