import type {Express} from "express"
import express from "express"
import brands from './routes/brands.ts'
import carModels from "./routes/car-models.ts"

const app: Express = express()
app.set('view engine', 'pug')
app.set('views', './src/views')

app.use(express.static('public'))
app.use('/', brands)
app.use('/', carModels)

export {app}
