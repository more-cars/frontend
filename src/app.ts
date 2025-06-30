import type {Express} from "express"
import express from "express"
import brands from './routes/brands.ts'

const app: Express = express()
app.set('view engine', 'pug')
app.set('views', './src/views')

app.use(express.static('public'))
app.use('/', brands)

export {app}
