import type {DataNodeType} from "../types/DataNodeType"
import {requestDataFromApi} from "../requestDataFromApi"
import {dasherize, pluralize} from "inflection"

export async function getTotalNodeCount(nodeType: DataNodeType) {
    const normalizedNodeType = dasherize(pluralize(nodeType.toLowerCase()))
    const apiData = (await requestDataFromApi('/' + normalizedNodeType))

    if (!apiData) {
        return -1
    }

    return apiData.meta.total as number
}
