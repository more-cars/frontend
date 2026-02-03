import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiRacingSessionNode} from "./types/ApiRacingSessionNode"
import type {RacingSessionNode} from "./types/RacingSessionNode"

export async function getRacingSessionById(id: number) {
    const apiData = (await requestDataFromApi(`/racing-sessions/${id}`)) as ApiRacingSessionNode

    if (!apiData) {
        return null
    }

    return apiData.data as RacingSessionNode
}
