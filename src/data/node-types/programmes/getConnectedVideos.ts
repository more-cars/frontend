import {requestDataFromApi} from "../../requestDataFromApi"
import {getProgrammeById} from "./getProgrammeById"
import type {ApiProgrammeHasVideoRelationship} from "./types/ApiProgrammeHasVideoRelationship"
import type {ProgrammeHasVideoRelationship} from "./types/ProgrammeHasVideoRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {VideoNode} from "../videos/types/VideoNode"

export async function getConnectedVideos(id: number) {
    const sourceNode = await getProgrammeById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/programmes/${id}/has-video`)).data as ApiProgrammeHasVideoRelationship[]
    const data: ProgrammeHasVideoRelationship[] = []

    apiData.forEach(apiItem => {
        data.push({
            id: apiItem.data.relationship_id,
            name: DataRelationshipType.PROGRAMME_HAS_VIDEO,
            source_node: sourceNode,
            source_node_type: DataNodeType.PROGRAMME,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data.partner_node) as VideoNode,
            partner_node_type: DataNodeType.VIDEO,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
