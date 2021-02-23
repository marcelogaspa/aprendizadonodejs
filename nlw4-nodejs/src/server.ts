import 'reflect-metadata'
import express, { json, text } from 'express'
import './database'
import { router } from './routes'

const app = express()

app.use(express.json())
app.use(router)

app.listen(4343, () => console.log("Server is running"))
