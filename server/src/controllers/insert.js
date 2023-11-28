import * as insertService from '../services/insert'

export const insert = async (req, res) => {

    try {
        // const result = await insertService.insertService()
        const result = await insertService.createPricesAndAcreage()

        return res.status(200).json(result)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Fail at insert controller: ' + error
        })
    }
}