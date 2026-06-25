import {requestDataFromApi} from "../../requestDataFromApi"
import {convertApiNodeToDataNode} from "../../lib/convertApiNodeToDataNode"
import type {ApiRacingSeriesNode} from "./types/ApiRacingSeriesNode"
import type {RacingSeriesNode} from "./types/RacingSeriesNode"

export async function getRacingSeriesById(id: number) {
    const apiData = (await requestDataFromApi(`/racing-series/${id}`))

    if (!apiData || apiData?.errors) {
        return null
    }

    return convertApiNodeToDataNode(apiData as ApiRacingSeriesNode) as RacingSeriesNode
}
