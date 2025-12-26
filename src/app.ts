import type {Express} from "express"
import express from "express"
import startPage from "./routes/startPage.ts"
import brands from './routes/brands.ts'
import carModels from "./routes/car-models"
import images from "./routes/images"
import {basicAuthentication} from "./basicAuthentication"

const app: Express = express()
app.set('view engine', 'pug')
app.set('views', './src/views')

app.use(basicAuthentication)
app.use(express.static('public'))
app.use('/', startPage)
app.use('/', brands)
app.use('/', carModels)
app.use('/', images)

export {app}
