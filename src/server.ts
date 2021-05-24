import express from 'express'
import indexRouter from './routes/index'
import userRouter from './routes/users'
import fileRouter from './routes/files'
import postRouter from './routes/posts'

const server = express()

server.listen(8001)

server.use('/', indexRouter)
server.use('/files', fileRouter)
server.use('/posts', postRouter)
server.use('/users', userRouter)

export default server