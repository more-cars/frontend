import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiRacingGameNode} from "./types/ApiRacingGameNode"
import {convertApiNodeToDataNode} from "../../lib/convertApiNodeToDataNode"
import type {RacingGameNode} from "./types/RacingGameNode"

export async function getRacingGameById(id: number) {
    const apiData = (await requestDataFromApi(`/racing-games/${id}`)) as ApiRacingGameNode

    if (!apiData) {
        return null
    }

    return convertApiNodeToDataNode(apiData) as RacingGameNode
}
