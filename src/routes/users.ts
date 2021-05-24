import express from 'express'
const router = express.Router()

/* GET users listing. */
router.get('/', function(req, res) {
  const users = ['Mauro', 'Poli', 'Elena']

  res.json(users)
})

export default router
