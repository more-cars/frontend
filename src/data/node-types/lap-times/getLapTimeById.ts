import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiLapTimeNode} from "./types/ApiLapTimeNode"
import {convertApiNodeToDataNode} from "../../lib/convertApiNodeToDataNode"
import type {LapTimeNode} from "./types/LapTimeNode"

export async function getLapTimeById(id: number) {
    const apiData = (await requestDataFromApi(`/lap-times/${id}`)) as ApiLapTimeNode

    if (!apiData) {
        return null
    }

    return convertApiNodeToDataNode(apiData.attributes, apiData.id) as LapTimeNode
}
