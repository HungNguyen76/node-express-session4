import express from 'express'
const router = express.Router()

import apiV1 from './v1'
router.use('/v1', apiV1)

module.exports = router;