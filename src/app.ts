import express from "express"
import compression from 'compression'
import canonicalAndRedirectUrls from "./routes/canonical-and-redirect-urls"
import startPage from "./routes/startPage.ts"
import {analyticsMiddleware} from "./tracking/analyticsMiddleware"
import {basicAuthentication} from "./basicAuthentication"
import {registerViewHelpers} from "./routes/registerViewHelpers"
import {registerNodeTypeRoutes} from "./routes/registerNodeTypeRoutes"

const app = express()

app.set('view engine', 'pug')
app.set('views', './src/views')
app.set('trust proxy', true) // needed, so the tracking still works with Kubernetes+Gateway+HTTPRoute

app.use(compression())
app.use(analyticsMiddleware)
app.use(basicAuthentication)

registerViewHelpers(app)

app.use(express.static('public'))
app.use('/', canonicalAndRedirectUrls)
app.use('/', startPage)
registerNodeTypeRoutes(app)

export {app}
