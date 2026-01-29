import {getApiRequestUrl} from "../../lib/getApiRequestUrl"
import {DataNodeType} from "../../types/DataNodeType"
import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiRacingSeriesNode} from "./types/ApiRacingSeriesNode"
import type {RacingSeriesNode} from "./types/RacingSeriesNode"

export async function getAllRacingSeries(params?: { page: number }) {
    const url = getApiRequestUrl(DataNodeType.RACING_SERIES, params)
    const apiData = (await requestDataFromApi(url)).data as ApiRacingSeriesNode[]
    const data: RacingSeriesNode[] = []

    apiData.forEach(apiItem => {
        data.push(apiItem.data)
    })

    return data
}
