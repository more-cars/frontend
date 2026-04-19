import {Express} from "express"
import {canonicalUrlPath} from "../views/lib/canonicalUrlPath"
import {nodeTitle} from "../views/lib/nodeTitle"
import {nodeTypeUrlPath} from "../views/lib/nodeTypeUrlPath"
import {getNodeTypeLabelPlural} from "../views/lib/getNodeTypeLabelPlural"
import {convertDate} from "../views/lib/convertDate"
import {convertDateTime} from "../views/lib/convertDateTime"
import {formatTime} from "../views/lib/formatTime"
import {getAge} from "../views/lib/getAge"
import {ordinalizeNumber} from "../views/lib/ordinalize"
import {getNodeTypeIcon} from "../views/lib/getNodeTypeIcon"
import {getCountryFlag} from "../views/lib/getCountryFlag"

export function registerViewHelpers(app: Express) {
    app.locals.canonical = canonicalUrlPath
    app.locals.title = nodeTitle
    app.locals.nodeTypePath = nodeTypeUrlPath
    app.locals.nodeTypeLabelPlural = getNodeTypeLabelPlural
    app.locals.formatDate = convertDate
    app.locals.formatDateTime = convertDateTime
    app.locals.formatTime = formatTime
    app.locals.age = getAge
    app.locals.ordinalize = ordinalizeNumber
    app.locals.icon = getNodeTypeIcon
    app.locals.countryFlag = getCountryFlag
}
