import {getApiRequestUrl} from "../../lib/getApiRequestUrl"
import {DataNodeType} from "../../types/DataNodeType"
import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiRaceTrackNode} from "./types/ApiRaceTrackNode"
import type {RaceTrackNode} from "./types/RaceTrackNode"

export async function getAllRaceTracks(params?: { page: number }) {
    const url = getApiRequestUrl(DataNodeType.RACE_TRACK, params)
    const apiData = (await requestDataFromApi(url)).data as ApiRaceTrackNode[]
    const data: RaceTrackNode[] = []

    apiData.forEach(apiItem => {
        data.push(apiItem.data)
    })

    return data
}
