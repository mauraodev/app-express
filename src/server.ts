import express from 'express'
import logger from 'morgan'
import cookieParser from 'cookie-parser'

import indexRouter from './routes/index'
import userRouter from './routes/users'
import fileRouter from './routes/files'
import postRouter from './routes/posts'

const server = express()

server.use(logger('dev'))
server.use(express.json())
server.use(cookieParser())

server.use('/', indexRouter)
server.use('/files', fileRouter)
server.use('/posts', postRouter)
server.use('/users', userRouter)

server.listen(8001)

export default server
