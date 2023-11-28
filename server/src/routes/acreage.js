import express from 'express'

import * as controller from '../controllers/acreage'

const router = express.Router()

router.get('/all', controller.getAcreage)

export default router