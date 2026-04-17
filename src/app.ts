import type {Express} from "express"
import express from "express"
import canonicalAndRedirectUrls from "./routes/canonical-and-redirect-urls"
import startPage from "./routes/startPage.ts"
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
import {registerNodeTypeRoutes} from "./routes/registerNodeTypeRoutes"

const app: Express = express()
app.set('view engine', 'pug')
app.set('views', './src/views')

app.use(analyticsMiddleware)
app.use(basicAuthentication)
app.use(express.static('public'))

app.use('/', canonicalAndRedirectUrls)

app.use('/', startPage)
registerNodeTypeRoutes(app)

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
