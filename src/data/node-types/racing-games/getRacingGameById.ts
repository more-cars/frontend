import {requestDataFromApi} from "../../requestDataFromApi"
import {convertApiNodeToDataNode} from "../../lib/convertApiNodeToDataNode"
import type {ApiRacingGameNode} from "./types/ApiRacingGameNode"
import type {RacingGameNode} from "./types/RacingGameNode"

export async function getRacingGameById(id: number) {
    const apiData = (await requestDataFromApi(`/racing-games/${id}`))

    if (!apiData || apiData?.errors) {
        return null
    }

    return convertApiNodeToDataNode(apiData as ApiRacingGameNode) as RacingGameNode
}
