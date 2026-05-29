import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiRacingEventFollowsEventRelationship} from "./types/ApiRacingEventFollowsEventRelationship"
import {getRacingEventById} from "./getRacingEventById"
import type {RacingEventFollowsEventRelationship} from "./types/RacingEventFollowsEventRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import {convertStringToApiNodeType} from "../../../../tests/_toolbox/convertStringToNodeType"
import type {RacingEventNode} from "./types/RacingEventNode"

export async function getConnectedPredecessor(id: number) {
    const sourceNode = await getRacingEventById(id)
    if (!sourceNode) {
        return null
    }

    const apiData = (await requestDataFromApi(`/racing-events/${id}/follows-event`)) as ApiRacingEventFollowsEventRelationship
    if (!apiData || !apiData.data) {
        return null
    }

    const data: RacingEventFollowsEventRelationship = {
        id: apiData.data.data?.relationship_id,
        name: DataRelationshipType.RACING_EVENT_FOLLOWS_EVENT,
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
