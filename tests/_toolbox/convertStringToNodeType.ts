import {humanize, pluralize, underscore} from "inflection"
import {kebabCase} from "change-case"
import type {ApiNodeType} from "../../src/data/types/ApiNodeType"
import type {ModelNodeType} from "../../src/models/types/ModelNodeType"
import type {DataNodeType} from "../../src/data/types/DataNodeType"

export function convertStringToApiNodeType(rawNodeType: string) {
    return kebabCase(pluralize(rawNodeType.toLowerCase())) as ApiNodeType
}

export function convertStringToModelNodeType(rawNodeType: string) {
    return underscore(kebabCase(rawNodeType.toLowerCase())) as ModelNodeType
}

export function convertStringToDataNodeType(rawNodeType: string) {
    return humanize(rawNodeType).toLowerCase() as DataNodeType
}
