import {requestDataFromApi} from "../../requestDataFromApi"
import {convertApiNodeToDataNode} from "../../lib/convertApiNodeToDataNode"
import type {ApiRacingSessionNode} from "./types/ApiRacingSessionNode"
import type {RacingSessionNode} from "./types/RacingSessionNode"

export async function getRacingSessionById(id: number) {
    const apiData = (await requestDataFromApi(`/racing-sessions/${id}`))

    if (!apiData || apiData?.errors) {
        return null
    }

    return convertApiNodeToDataNode(apiData as ApiRacingSessionNode) as RacingSessionNode
}
