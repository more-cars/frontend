import {requestDataFromApi} from "../../requestDataFromApi"
import {convertApiNodeToDataNode} from "../../lib/convertApiNodeToDataNode"
import type {ApiSessionResultNode} from "./types/ApiSessionResultNode"
import type {SessionResultNode} from "./types/SessionResultNode"

export async function getSessionResultById(id: number) {
    const apiData = (await requestDataFromApi(`/session-results/${id}`))

    if (!apiData || apiData?.errors) {
        return null
    }

    return convertApiNodeToDataNode(apiData as ApiSessionResultNode) as SessionResultNode
}
