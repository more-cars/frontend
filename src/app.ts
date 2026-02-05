import type {Express} from "express"
import express from "express"
import startPage from "./routes/startPage.ts"
import companies from "./routes/companies"
import brands from './routes/brands.ts'
import carModels from "./routes/car-models"
import raceTracks from "./routes/race-tracks"
import trackLayouts from "./routes/track-layouts"
import racingSeries from "./routes/racing-series"
import racingEvents from "./routes/racing-events"
import racingSessions from "./routes/racing-sessions"
import sessionResults from "./routes/session-results"
import lapTimes from "./routes/lap-times"
import images from "./routes/images"
import {basicAuthentication} from "./basicAuthentication"
import {convertDate} from "./views/lib/convertDate.ts"
import {convertDateTime} from "./views/lib/convertDateTime.ts"
import {ordinalizeNumber} from "./views/lib/ordinalize.ts"

const app: Express = express()
app.set('view engine', 'pug')
app.set('views', './src/views')

app.use(basicAuthentication)
app.use(express.static('public'))
app.use('/', startPage)
app.use('/', companies)
app.use('/', brands)
app.use('/', carModels)
app.use('/', raceTracks)
app.use('/', trackLayouts)
app.use('/', racingSeries)
app.use('/', racingEvents)
app.use('/', racingSessions)
app.use('/', sessionResults)
app.use('/', lapTimes)
app.use('/', images)

app.locals.formatDate = convertDate
app.locals.formatDateTime = convertDateTime
app.locals.ordinalize = ordinalizeNumber

export {app}
