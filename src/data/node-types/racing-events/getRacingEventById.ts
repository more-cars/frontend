import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiRacingEventNode} from "./types/ApiRacingEventNode"
import type {RacingEventNode} from "./types/RacingEventNode"
import {convertApiNodeToDataNode} from "../../lib/convertApiNodeToDataNode"

export async function getRacingEventById(id: number) {
    const apiData = (await requestDataFromApi(`/racing-events/${id}`)) as ApiRacingEventNode

    if (!apiData) {
        return null
    }

    return convertApiNodeToDataNode(apiData.attributes, apiData.id) as RacingEventNode
}
