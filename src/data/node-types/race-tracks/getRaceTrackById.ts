import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiRaceTrackNode} from "./types/ApiRaceTrackNode"
import type {RaceTrackNode} from "./types/RaceTrackNode"

export async function getRaceTrackById(id: number) {
    const apiData = (await requestDataFromApi(`/race-tracks/${id}`)) as ApiRaceTrackNode

    if (!apiData) {
        return null
    }

    return apiData.data as RaceTrackNode
}
