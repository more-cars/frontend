import {getApiRequestUrl} from "../../lib/getApiRequestUrl"
import {DataNodeType} from "../../types/DataNodeType"
import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiRacingSessionNode} from "./types/ApiRacingSessionNode"
import type {RacingSessionNode} from "./types/RacingSessionNode"

export async function getAllRacingSessions(params?: { page: number }) {
    const url = getApiRequestUrl(DataNodeType.RACING_SESSION, params)
    const apiData: ApiRacingSessionNode[] = (await requestDataFromApi(url))?.data || []
    const data: RacingSessionNode[] = []

    apiData.forEach(apiItem => {
        data.push(apiItem.data)
    })

    return data
}
