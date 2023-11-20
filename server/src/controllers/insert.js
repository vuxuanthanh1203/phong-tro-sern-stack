import * as insertService from '../services/insert'

export const insert = async (req, res) => {

    try {
        const result = await insertService.insertService(req.body)

        return res.status(200).json(result)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Fail at authController - register: ' + error
        })
    }
}