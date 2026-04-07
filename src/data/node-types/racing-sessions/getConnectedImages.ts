import {requestDataFromApi} from "../../requestDataFromApi"
import {getRacingSessionById} from "./getRacingSessionById"
import type {ApiRacingSessionHasImageRelationship} from "./types/ApiRacingSessionHasImageRelationship"
import type {RacingSessionHasImageRelationship} from "./types/RacingSessionHasImageRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {ImageNode} from "../images/types/ImageNode"

export async function getConnectedImages(id: number) {
    const sourceNode = await getRacingSessionById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/racing-sessions/${id}/has-image`)).data as ApiRacingSessionHasImageRelationship[]
    const data: RacingSessionHasImageRelationship[] = []

    apiData.forEach(apiItem => {
        data.push({
            id: apiItem.data.relationship_id,
            name: DataRelationshipType.RACING_SESSION_HAS_IMAGE,
            source_node: sourceNode,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data.partner_node) as ImageNode,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
