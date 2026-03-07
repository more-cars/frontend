import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiRacingSeriesNode} from "./types/ApiRacingSeriesNode"
import type {RacingSeriesNode} from "./types/RacingSeriesNode"
import {convertApiNodeToDataNode} from "../../lib/convertApiNodeToDataNode"

export async function getRacingSeriesById(id: number) {
    const apiData = (await requestDataFromApi(`/racing-series/${id}`)) as ApiRacingSeriesNode

    if (!apiData) {
        return null
    }

    return convertApiNodeToDataNode(apiData.attributes, apiData.id) as RacingSeriesNode
}
