import {requestDataFromApi} from "../../requestDataFromApi"
import {getLapTimeById} from "./getLapTimeById"
import type {ApiLapTimeHasVideoRelationship} from "./types/ApiLapTimeHasVideoRelationship"
import type {LapTimeHasVideoRelationship} from "./types/LapTimeHasVideoRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import {convertStringToApiNodeType} from "../../lib/convertStringToApiNodeType"
import type {VideoNode} from "../videos/types/VideoNode"

export async function getConnectedVideos(id: number) {
    const sourceNode = await getLapTimeById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/lap-times/${id}/has-video`)) as ApiLapTimeHasVideoRelationship
    const data: LapTimeHasVideoRelationship[] = []

    apiData.data.forEach(apiItem => {
        data.push({
            id: apiItem.data?.relationship_id,
            name: DataRelationshipType.LAP_TIME_HAS_VIDEO,
            source_node: sourceNode,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data?.partner_node || {
                node_type: convertStringToApiNodeType(apiItem.type),
                data: {...apiItem.attributes, id: apiItem.id},
            }) as VideoNode,
            created_at: apiItem.data?.created_at,
            updated_at: apiItem.data?.updated_at,
        })
    })

    return data
}
