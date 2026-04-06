import {requestDataFromApi} from "../../requestDataFromApi"
import {getRacingSessionById} from "./getRacingSessionById"
import type {ApiRacingSessionHasVideoRelationship} from "./types/ApiRacingSessionHasVideoRelationship"
import type {RacingSessionHasVideoRelationship} from "./types/RacingSessionHasVideoRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {VideoNode} from "../videos/types/VideoNode"

export async function getConnectedVideos(id: number) {
    const sourceNode = await getRacingSessionById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/racing-sessions/${id}/has-video`)).data as ApiRacingSessionHasVideoRelationship[]
    const data: RacingSessionHasVideoRelationship[] = []

    apiData.forEach(apiItem => {
        data.push({
            id: apiItem.data.relationship_id,
            name: DataRelationshipType.RACING_SESSION_HAS_VIDEO,
            source_node: sourceNode,
            source_node_type: DataNodeType.RACING_SESSION,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data.partner_node) as VideoNode,
            partner_node_type: DataNodeType.VIDEO,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
