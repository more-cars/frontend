import type {DataSearchParams} from "../../types/DataSearchParams"
import {getApiRequestUrl} from "../../lib/getApiRequestUrl"
import {DataNodeType} from "../../types/DataNodeType"
import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiRaceTrackNode} from "./types/ApiRaceTrackNode"
import type {RaceTrackNode} from "./types/RaceTrackNode"
import {convertApiNodeToDataNode} from "../../lib/convertApiNodeToDataNode"

export async function getAllRaceTracks(params?: DataSearchParams) {
    const url = getApiRequestUrl(DataNodeType.RACE_TRACK, params)
    const apiData: ApiRaceTrackNode[] = (await requestDataFromApi(url))?.data || []
    const data: RaceTrackNode[] = []

    apiData.forEach(apiItem => {
        data.push(convertApiNodeToDataNode(apiItem) as RaceTrackNode)
    })

    return data
}
