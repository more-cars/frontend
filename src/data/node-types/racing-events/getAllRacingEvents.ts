import {getApiRequestUrl} from "../../lib/getApiRequestUrl"
import {DataNodeType} from "../../types/DataNodeType"
import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiRacingEventNode} from "./types/ApiRacingEventNode"
import type {RacingEventNode} from "./types/RacingEventNode"

export async function getAllRacingEvents(params?: { page: number }) {
    const url = getApiRequestUrl(DataNodeType.RACING_EVENT, params)
    const apiData = (await requestDataFromApi(url)).data as ApiRacingEventNode[]
    const data: RacingEventNode[] = []

    apiData.forEach(apiItem => {
        data.push(apiItem.data)
    })

    return data
}
