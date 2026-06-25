import {requestDataFromApi} from "../requestDataFromApi"
import {convertApiNodeToDataNode} from "../lib/convertApiNodeToDataNode"
import type {ApiNode} from "./types/ApiNode"

export async function getNodeById(id: number) {
    const apiData = (await requestDataFromApi(`/nodes/${id}`))

    if (!apiData || apiData?.errors) {
        return null
    }

    return convertApiNodeToDataNode(apiData as ApiNode)
}
