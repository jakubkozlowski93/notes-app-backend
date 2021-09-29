const express = require('express')
const router = express.Router()
const actions = require('./../controlers/actions')

router.post('/login', actions.getLogin)
router.get('/main', actions.getAdmin)

module.exports = router
