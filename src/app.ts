import express, {Express} from "express"
import brands from './routes/brands'

const app: Express = express()
app.set('view engine', 'pug')
app.set('views', './src/routes/views')

app.use(express.static('public'))
app.use('/', brands)

export {app}
