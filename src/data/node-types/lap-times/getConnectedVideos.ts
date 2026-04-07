import {requestDataFromApi} from "../../requestDataFromApi"
import {getLapTimeById} from "./getLapTimeById"
import type {ApiLapTimeHasVideoRelationship} from "./types/ApiLapTimeHasVideoRelationship"
import type {LapTimeHasVideoRelationship} from "./types/LapTimeHasVideoRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
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
            id: apiItem.data.relationship_id,
            name: DataRelationshipType.LAP_TIME_HAS_VIDEO,
            source_node: sourceNode,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data.partner_node) as VideoNode,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
