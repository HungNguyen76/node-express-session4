import express from 'express'
const router = express.Router()

import usersApi from '../routes/apis/users'
router.use('/users', usersApi)

module.exports = router;