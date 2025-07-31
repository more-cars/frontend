import type {Express} from "express"
import express from "express"
import brands from './routes/brands.ts'
import carModels from "./routes/car-models.ts"
import images from "./routes/images.ts"
import {basicAuthentication} from "./basicAuthentication.ts"

const app: Express = express()
app.set('view engine', 'pug')
app.set('views', './src/views')

app.use(basicAuthentication)
app.use(express.static('public'))
app.use('/', brands)
app.use('/', carModels)
app.use('/', images)

export {app}
