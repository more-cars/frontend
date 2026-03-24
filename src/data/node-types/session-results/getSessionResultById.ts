import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiSessionResultNode} from "./types/ApiSessionResultNode"
import type {SessionResultNode} from "./types/SessionResultNode"
import {convertApiNodeToDataNode} from "../../lib/convertApiNodeToDataNode"

export async function getSessionResultById(id: number) {
    const apiData = (await requestDataFromApi(`/session-results/${id}`)) as ApiSessionResultNode

    if (!apiData) {
        return null
    }

    return convertApiNodeToDataNode(apiData) as SessionResultNode
}
