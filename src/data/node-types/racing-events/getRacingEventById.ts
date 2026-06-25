import {requestDataFromApi} from "../../requestDataFromApi"
import {convertApiNodeToDataNode} from "../../lib/convertApiNodeToDataNode"
import type {ApiRacingEventNode} from "./types/ApiRacingEventNode"
import type {RacingEventNode} from "./types/RacingEventNode"

export async function getRacingEventById(id: number) {
    const apiData = (await requestDataFromApi(`/racing-events/${id}`))

    if (!apiData || apiData?.errors) {
        return null
    }

    return convertApiNodeToDataNode(apiData as ApiRacingEventNode) as RacingEventNode
}
