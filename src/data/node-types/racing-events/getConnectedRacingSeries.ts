import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiRacingEventBelongsToRacingSeriesRelationship} from "./types/ApiRacingEventBelongsToRacingSeriesRelationship"
import {getRacingEventById} from "./getRacingEventById"
import type {RacingEventBelongsToRacingSeriesRelationship} from "./types/RacingEventBelongsToRacingSeriesRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import {convertStringToApiNodeType} from "../../lib/convertStringToApiNodeType"
import type {RacingSeriesNode} from "../racing-series/types/RacingSeriesNode"

export async function getConnectedRacingSeries(id: number) {
    const sourceNode = await getRacingEventById(id)
    if (!sourceNode) {
        return null
    }

    const apiData = (await requestDataFromApi(`/racing-events/${id}/belongs-to-racing-series`)) as ApiRacingEventBelongsToRacingSeriesRelationship
    if (!apiData || !apiData.data) {
        return null
    }

    const data: RacingEventBelongsToRacingSeriesRelationship = {
        id: apiData.data.data?.relationship_id,
        name: DataRelationshipType.RACING_EVENT_BELONGS_TO_RACING_SERIES,
        source_node: sourceNode,
        partner_node: convertApiRelationshipNodeToDataNode(apiData.data.data?.partner_node || {
            node_type: convertStringToApiNodeType(apiData.data.type),
            data: {...apiData.data.attributes, id: apiData.data.id},
        }) as RacingSeriesNode,
        created_at: apiData.data.data?.created_at,
        updated_at: apiData.data.data?.updated_at,
    }

    return data
}
