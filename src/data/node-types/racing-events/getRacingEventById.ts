import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiRacingEventNode} from "./types/ApiRacingEventNode"
import type {RacingEventNode} from "./types/RacingEventNode"

export async function getRacingEventById(id: number) {
    const apiData = (await requestDataFromApi(`/racing-events/${id}`)) as ApiRacingEventNode

    if (!apiData) {
        return null
    }

    return apiData.data as RacingEventNode
}
