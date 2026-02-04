import {getApiRequestUrl} from "../../lib/getApiRequestUrl"
import {DataNodeType} from "../../types/DataNodeType"
import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiSessionResultNode} from "./types/ApiSessionResultNode"
import type {SessionResultNode} from "./types/SessionResultNode"

export async function getAllSessionResults(params?: { page: number }) {
    const urlParams = {page: params?.page, sortByProperty: 'position'}
    const url = getApiRequestUrl(DataNodeType.SESSION_RESULT, urlParams)
    const apiData = (await requestDataFromApi(url)).data as ApiSessionResultNode[]
    const data: SessionResultNode[] = []

    apiData.forEach(apiItem => {
        data.push(apiItem.data)
    })

    return data
}
