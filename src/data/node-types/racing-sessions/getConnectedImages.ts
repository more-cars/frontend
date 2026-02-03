import {requestDataFromApi} from "../../requestDataFromApi"
import {getRacingSessionById} from "./getRacingSessionById"
import type {ApiRacingSessionHasImageRelationship} from "./types/ApiRacingSessionHasImageRelationship"
import type {RacingSessionHasImageRelationship} from "./types/RacingSessionHasImageRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"

export async function getConnectedImages(id: number) {
    const sourceNode = await getRacingSessionById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/racing-sessions/${id}/has-image`)).data as ApiRacingSessionHasImageRelationship[]
    const data: RacingSessionHasImageRelationship[] = []

    apiData.forEach(apiItem => {
        data.push({
            id,
            name: DataRelationshipType.RACING_SESSION_HAS_IMAGE,
            source_node: sourceNode,
            source_node_type: DataNodeType.RACING_SESSION,
            partner_node: apiItem.data.relationship_partner.data,
            partner_node_type: DataNodeType.IMAGE,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
