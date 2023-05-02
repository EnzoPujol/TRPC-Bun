import { sequelize } from './db/sequelize-init';
import { createExpressMiddleware } from '@trpc/server/adapters/express'
import express from 'express'
import { config } from 'dotenv'
import cors from 'cors'
import http from 'http'
import bodyParser from 'body-parser'
import { appRouter } from './routes'
import { createContext } from './routes/trpc-config'

config()

const app = express()
const server = http.createServer(app)

export type AppRouter = typeof appRouter

const PORT = 8080

app.use(cors())
app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))

app.get('/', (_req, res) => {
  res.status(200).json({ status: 'ok' })
})

app.use(
  '/',
  createExpressMiddleware<AppRouter>({
    router: appRouter,
    createContext,
  })
)

server.listen(PORT, async () => {
  console.log('Connection has been established successfully')
  console.log('server listening on port ', PORT)
})