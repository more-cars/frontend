import express, {Express} from "express"
import brands from './routes/brands'

const app: Express = express()

app.use('/', brands)

export {app}
