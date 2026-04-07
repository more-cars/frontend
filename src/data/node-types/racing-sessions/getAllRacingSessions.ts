import type {DataSearchParams} from "../../types/DataSearchParams"
import {getApiRequestUrl} from "../../lib/getApiRequestUrl"
import {DataNodeType} from "../../types/DataNodeType"
import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiRacingSessionNode} from "./types/ApiRacingSessionNode"
import type {RacingSessionNode} from "./types/RacingSessionNode"
import {convertApiNodeToDataNode} from "../../lib/convertApiNodeToDataNode"

export async function getAllRacingSessions(params?: DataSearchParams) {
    const url = getApiRequestUrl(DataNodeType.RACING_SESSION, params)
    const apiData: ApiRacingSessionNode[] = (await requestDataFromApi(url))?.data || []
    const data: RacingSessionNode[] = []

    apiData.forEach(apiItem => {
        data.push(convertApiNodeToDataNode(apiItem) as RacingSessionNode)
    })

    return data
}
