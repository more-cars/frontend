import {Express} from "express"
import {canonicalUrlPath} from "../views/lib/canonicalUrlPath"
import {nodeTitle} from "../views/lib/nodeTitle"
import {nodeTypeUrlPath} from "../views/lib/nodeTypeUrlPath"
import {getNodeTypeLabelPlural} from "../views/lib/getNodeTypeLabelPlural"
import {convertDate} from "../views/lib/convertDate"
import {formatDateTime} from "../views/lib/formatDateTime"
import {formatDuration} from "../views/lib/formatDuration"
import {getAge} from "../views/lib/getAge"
import {ordinalizeNumber} from "../views/lib/ordinalize"
import {getNodeTypeIcon} from "../views/lib/getNodeTypeIcon"
import {getCountryFlag} from "../views/lib/getCountryFlag"
import {formatNumber} from "../views/lib/formatNumber"

export function registerViewHelpers(app: Express) {
    app.locals.canonical = canonicalUrlPath
    app.locals.title = nodeTitle
    app.locals.nodeTypePath = nodeTypeUrlPath
    app.locals.nodeTypeLabelPlural = getNodeTypeLabelPlural
    app.locals.formatDate = convertDate
    app.locals.formatDateTime = formatDateTime
    app.locals.formatDuration = formatDuration
    app.locals.age = getAge
    app.locals.ordinalize = ordinalizeNumber
    app.locals.icon = getNodeTypeIcon
    app.locals.countryFlag = getCountryFlag
    app.locals.formatNumber = formatNumber
}
