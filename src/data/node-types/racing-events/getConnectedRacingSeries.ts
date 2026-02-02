import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiRacingEventBelongsToRacingSeriesRelationship} from "./types/ApiRacingEventBelongsToRacingSeriesRelationship"
import {getRacingEventById} from "./getRacingEventById"
import type {RacingEventBelongsToRacingSeriesRelationship} from "./types/RacingEventBelongsToRacingSeriesRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"

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
        id,
        name: DataRelationshipType.RACING_EVENT_BELONGS_TO_RACING_SERIES,
        source_node: sourceNode,
        source_node_type: DataNodeType.RACING_EVENT,
        partner_node: apiData.data.relationship_partner.data,
        partner_node_type: DataNodeType.RACING_SERIES,
        created_at: apiData.data.created_at,
        updated_at: apiData.data.updated_at,
    }

    return data
}
