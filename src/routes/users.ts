import express, { Request, Response } from 'express'
const router = express.Router()

/* GET users listing. */
router.get('/', (req: Request, res: Response) => {
  const users = ['Mauro', 'Poli', 'Elena']
  res.json(users)
})

router.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Sucesso ao adicionar usuário',
  })
})

export default router
