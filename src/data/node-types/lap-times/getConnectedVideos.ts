import {requestDataFromApi} from "../../requestDataFromApi"
import {getLapTimeById} from "./getLapTimeById"
import type {ApiLapTimeHasVideoRelationship} from "./types/ApiLapTimeHasVideoRelationship"
import type {LapTimeHasVideoRelationship} from "./types/LapTimeHasVideoRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {VideoNode} from "../videos/types/VideoNode"

export async function getConnectedVideos(id: number) {
    const sourceNode = await getLapTimeById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/lap-times/${id}/has-video`)).data as ApiLapTimeHasVideoRelationship[]
    const data: LapTimeHasVideoRelationship[] = []

    apiData.forEach(apiItem => {
        data.push({
            id,
            name: DataRelationshipType.LAP_TIME_HAS_VIDEO,
            source_node: sourceNode,
            source_node_type: DataNodeType.LAP_TIME,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data.partner_node) as VideoNode,
            partner_node_type: DataNodeType.VIDEO,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
