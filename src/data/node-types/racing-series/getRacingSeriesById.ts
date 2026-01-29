import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiRacingSeriesNode} from "./types/ApiRacingSeriesNode"
import type {RacingSeriesNode} from "./types/RacingSeriesNode"

export async function getRacingSeriesById(id: number) {
    const apiData = (await requestDataFromApi(`/racing-series/${id}`)) as ApiRacingSeriesNode

    if (!apiData) {
        return null
    }

    return apiData.data as RacingSeriesNode
}
