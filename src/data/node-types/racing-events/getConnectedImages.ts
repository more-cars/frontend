import {requestDataFromApi} from "../../requestDataFromApi"
import {getRacingEventById} from "./getRacingEventById"
import type {ApiRacingEventHasImageRelationship} from "./types/ApiRacingEventHasImageRelationship"
import type {RacingEventHasImageRelationship} from "./types/RacingEventHasImageRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"

export async function getConnectedImages(id: number) {
    const sourceNode = await getRacingEventById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/racing-events/${id}/has-image`)).data as ApiRacingEventHasImageRelationship[]
    const data: RacingEventHasImageRelationship[] = []

    apiData.forEach(apiItem => {
        data.push({
            id,
            name: DataRelationshipType.RACING_EVENT_HAS_IMAGE,
            source_node: sourceNode,
            source_node_type: DataNodeType.RACING_EVENT,
            partner_node: apiItem.data.relationship_partner.data,
            partner_node_type: DataNodeType.IMAGE,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
