import type {Express} from "express"
import express from "express"
import canonicalAndRedirectUrls from "./routes/canonical-and-redirect-urls"
import startPage from "./routes/startPage.ts"
import companies from "./routes/companies"
import brands from './routes/brands.ts'
import carModels from "./routes/car-models"
import carModelVariants from "./routes/car-model-variants"
import prices from "./routes/prices"
import raceTracks from "./routes/race-tracks"
import trackLayouts from "./routes/track-layouts"
import racingSeries from "./routes/racing-series"
import racingEvents from "./routes/racing-events"
import racingSessions from "./routes/racing-sessions"
import sessionResults from "./routes/session-results"
import lapTimes from "./routes/lap-times"
import racingGames from "./routes/racing-games"
import gamingPlatforms from "./routes/gaming-platforms"
import modelCars from "./routes/model-cars"
import modelCarBrands from "./routes/model-car-brands"
import magazines from "./routes/magazines"
import magazineIssues from "./routes/magazine-issues"
import ratings from "./routes/ratings"
import programmes from "./routes/programmes"
import programmeEpisodes from "./routes/programme-episodes"
import motorShows from "./routes/motor-shows"
import videos from "./routes/videos"
import images from "./routes/images"
import {analyticsMiddleware} from "./tracking/analyticsMiddleware"
import {basicAuthentication} from "./basicAuthentication"
import {canonicalUrlPath} from "./views/lib/canonicalUrlPath"
import {nodeTitle} from "./views/lib/nodeTitle"
import {convertDate} from "./views/lib/convertDate.ts"
import {convertDateTime} from "./views/lib/convertDateTime.ts"
import {formatTime} from "./views/lib/formatTime.ts"
import {ordinalizeNumber} from "./views/lib/ordinalize.ts"
import {getNodeTypeIcon} from "./views/lib/getNodeTypeIcon"
import {nodeTypeUrlPath} from "./views/lib/nodeTypeUrlPath"
import {getCountryFlag} from "./views/lib/getCountryFlag"

const app: Express = express()
app.set('view engine', 'pug')
app.set('views', './src/views')

app.use(analyticsMiddleware)
app.use(basicAuthentication)
app.use(express.static('public'))

app.use('/', canonicalAndRedirectUrls)

app.use('/', startPage)
app.use('/', companies)
app.use('/', brands)
app.use('/', carModels)
app.use('/', carModelVariants)
app.use('/', prices)
app.use('/', raceTracks)
app.use('/', trackLayouts)
app.use('/', racingSeries)
app.use('/', racingEvents)
app.use('/', racingSessions)
app.use('/', sessionResults)
app.use('/', lapTimes)
app.use('/', racingGames)
app.use('/', gamingPlatforms)
app.use('/', modelCars)
app.use('/', modelCarBrands)
app.use('/', magazines)
app.use('/', magazineIssues)
app.use('/', ratings)
app.use('/', programmes)
app.use('/', programmeEpisodes)
app.use('/', motorShows)
app.use('/', videos)
app.use('/', images)

app.locals.canonical = canonicalUrlPath
app.locals.title = nodeTitle
app.locals.nodeTypePath = nodeTypeUrlPath
app.locals.formatDate = convertDate
app.locals.formatDateTime = convertDateTime
app.locals.formatTime = formatTime
app.locals.ordinalize = ordinalizeNumber
app.locals.icon = getNodeTypeIcon
app.locals.countryFlag = getCountryFlag

export {app}
