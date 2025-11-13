import {pluralize} from "inflection"
import {getNormalizedNodeType} from "./getNormalizedNodeType"

export function getNormalizedNodeTypePlural(nodeType: string) {
    return pluralize(getNormalizedNodeType(nodeType))
}