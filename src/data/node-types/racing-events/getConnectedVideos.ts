import {requestDataFromApi} from "../../requestDataFromApi"
import {getRacingEventById} from "./getRacingEventById"
import type {ApiRacingEventHasVideoRelationship} from "./types/ApiRacingEventHasVideoRelationship"
import type {RacingEventHasVideoRelationship} from "./types/RacingEventHasVideoRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {VideoNode} from "../videos/types/VideoNode"

export async function getConnectedVideos(id: number) {
    const sourceNode = await getRacingEventById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/racing-events/${id}/has-video`)).data as ApiRacingEventHasVideoRelationship[]
    const data: RacingEventHasVideoRelationship[] = []

    apiData.forEach(apiItem => {
        data.push({
            id: apiItem.data.relationship_id,
            name: DataRelationshipType.RACING_EVENT_HAS_VIDEO,
            source_node: sourceNode,
            source_node_type: DataNodeType.RACING_EVENT,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data.partner_node) as VideoNode,
            partner_node_type: DataNodeType.VIDEO,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
