import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiRacingSessionNode} from "./types/ApiRacingSessionNode"
import type {RacingSessionNode} from "./types/RacingSessionNode"
import {convertApiNodeToDataNode} from "../../lib/convertApiNodeToDataNode"

export async function getRacingSessionById(id: number) {
    const apiData = (await requestDataFromApi(`/racing-sessions/${id}`)) as ApiRacingSessionNode

    if (!apiData) {
        return null
    }

    return convertApiNodeToDataNode(apiData) as RacingSessionNode
}
