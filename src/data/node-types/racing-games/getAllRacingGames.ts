import {getApiRequestUrl} from "../../lib/getApiRequestUrl"
import {DataNodeType} from "../../types/DataNodeType"
import type {ApiRacingGameNode} from "./types/ApiRacingGameNode"
import {requestDataFromApi} from "../../requestDataFromApi"
import type {RacingGameNode} from "./types/RacingGameNode"
import {convertApiNodeToDataNode} from "../../lib/convertApiNodeToDataNode"

export async function getAllRacingGames(params?: { page: number }) {
    const url = getApiRequestUrl(DataNodeType.RACING_GAME, params)
    const apiData: ApiRacingGameNode[] = (await requestDataFromApi(url))?.data || []
    const data: RacingGameNode[] = []

    apiData.forEach(apiItem => {
        data.push(convertApiNodeToDataNode(apiItem) as RacingGameNode)
    })

    return data
}
