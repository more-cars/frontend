import {pluralize} from "inflection"
import {kebabCase} from "change-case"
import type {ApiNodeType} from "../../src/data/types/ApiNodeType"

export function convertStringToApiNodeType(rawNodeType: string) {
    return kebabCase(pluralize(rawNodeType.toLowerCase())) as ApiNodeType
}
