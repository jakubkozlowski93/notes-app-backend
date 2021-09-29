const express = require('express')
const router = express.Router()
const actions = require('./../controlers/actions')

router.get('/main', actions.getAdmin)
router.post('/login', actions.getLogin)

module.exports = router
