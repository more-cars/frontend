import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiRacingSessionBelongsToRacingEventRelationship} from "./types/ApiRacingSessionBelongsToRacingEventRelationship"
import {getRacingSessionById} from "./getRacingSessionById"
import type {RacingSessionBelongsToRacingEventRelationship} from "./types/RacingSessionBelongsToRacingEventRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import {convertStringToApiNodeType} from "../../../../tests/_toolbox/convertStringToNodeType"
import type {RacingEventNode} from "../racing-events/types/RacingEventNode"

export async function getConnectedRacingEvent(id: number) {
    const sourceNode = await getRacingSessionById(id)
    if (!sourceNode) {
        return null
    }

    const apiData = (await requestDataFromApi(`/racing-sessions/${id}/belongs-to-racing-event`)) as ApiRacingSessionBelongsToRacingEventRelationship
    if (!apiData || !apiData.data) {
        return null
    }

    const data: RacingSessionBelongsToRacingEventRelationship = {
        id: apiData.data.data?.relationship_id,
        name: DataRelationshipType.RACING_SESSION_BELONGS_TO_RACING_EVENT,
        source_node: sourceNode,
        partner_node: convertApiRelationshipNodeToDataNode(apiData.data.data?.partner_node || {
            node_type: convertStringToApiNodeType(apiData.data.type),
            data: {...apiData.data.attributes, id: apiData.data.id},
        }) as RacingEventNode,
        created_at: apiData.data.data?.created_at,
        updated_at: apiData.data.data?.updated_at,
    }

    return data
}
