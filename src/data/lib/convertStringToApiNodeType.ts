import {pluralize} from "inflection"
import {kebabCase} from "change-case"
import {ApiNodeType} from "../types/ApiNodeType"

export function convertStringToApiNodeType(rawNodeType: string) {
    return kebabCase(pluralize(rawNodeType.toLowerCase())) as ApiNodeType
}
