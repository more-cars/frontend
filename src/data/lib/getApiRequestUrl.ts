import {dasherize, pluralize} from "inflection"
import {DataNodeType} from "../types/DataNodeType"
import type {DataSearchParams} from "../types/DataSearchParams"

export function getApiRequestUrl(nodeType: DataNodeType, params?: DataSearchParams) {
    const path = dasherize(pluralize(nodeType))
    const sortByProperty = params?.sortByProperty ?? 'name'
    const sortDirection = params?.sortDirection ?? 'asc'
    const page = params?.page && params.page > 0 ? params.page : 1

    return `/${path}?sort_by_property=${sortByProperty}&sort_direction=${sortDirection}&page=${page}`
}
