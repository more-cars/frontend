import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiRacingEventIsFollowedByEventRelationship} from "./types/ApiRacingEventIsFollowedByEventRelationship"
import {getRacingEventById} from "./getRacingEventById"
import type {RacingEventIsFollowedByEventRelationship} from "./types/RacingEventIsFollowedByEventRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import {convertStringToApiNodeType} from "../../../../tests/_toolbox/convertStringToNodeType"
import type {RacingEventNode} from "./types/RacingEventNode"

export async function getConnectedSuccessor(id: number) {
    const sourceNode = await getRacingEventById(id)
    if (!sourceNode) {
        return null
    }

    const apiData = (await requestDataFromApi(`/racing-events/${id}/is-followed-by-event`)) as ApiRacingEventIsFollowedByEventRelationship
    if (!apiData || !apiData.data) {
        return null
    }

    const data: RacingEventIsFollowedByEventRelationship = {
        id: apiData.data.data?.relationship_id,
        name: DataRelationshipType.RACING_EVENT_IS_FOLLOWED_BY_EVENT,
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
