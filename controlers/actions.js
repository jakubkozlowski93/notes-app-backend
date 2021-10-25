const jwt = require('jsonwebtoken')
// const users = require('./../db/db')
const ACCESS_TOKEN = 'ndkqnj32or23523bj2fu2f23nfi2n1'

const users = [{ login: 'Admin', password: 'test123' }]

class Actions {
  getAdmin(req, res) {
    res.status(200).send('Witaj w panelu admina')
  }

  authMiddleware(req, res, next) {
    const token = req.headers['Authorization']?.split(' ')[1]
    if (!token) {
      return res.sendStatus(401)
    }
    jwt.verify(token, ACCESS_TOKEN, (err, data) => {
      if (err) {
        return res.sendStatus(403)
      }
      req.user = data
    })
  }

  async getLogin(req, res) {
    const user = await users.find((u) => u.login === req.body.login)
    if (!user) {
      return res.sendStatus(401)
    }
    if (req.body.password == user.password) {
      const payload = user
      const token = jwt.sign(payload, ACCESS_TOKEN)
      res.json({ token, payload })
    } else {
      return res.sendStatus(401)
    }
  }
}

module.exports = new Actions()
