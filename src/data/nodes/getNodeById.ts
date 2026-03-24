import {requestDataFromApi} from "../requestDataFromApi"
import type {ApiNode} from "./types/ApiNode"
import {convertApiNodeToDataNode} from "../lib/convertApiNodeToDataNode"

export async function getNodeById(id: number) {
    const apiData = (await requestDataFromApi(`/nodes/${id}`)) as ApiNode

    if (!apiData) {
        return null
    }

    return convertApiNodeToDataNode(apiData)
}
