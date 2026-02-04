import {DataNodeType} from "../types/DataNodeType"
import {dasherize, pluralize} from "inflection"

type UrlParams = {
    page?: number,
    sortByProperty?: string
}

export function getApiRequestUrl(nodeType: DataNodeType, params?: UrlParams) {
    const path = dasherize(pluralize(nodeType))
    const sortByProperty = params?.sortByProperty ?? 'name'
    const page = params?.page && params.page > 0 ? params.page : 1

    return `/${path}?sort_by_property=${sortByProperty}&page=${page}`
}
