import {requestDataFromApi} from "../../requestDataFromApi"
import {getRacingSeriesById} from "./getRacingSeriesById"
import type {ApiRacingSeriesHasRacingEventRelationship} from "./types/ApiRacingSeriesHasRacingEventRelationship"
import type {RacingSeriesHasRacingEventRelationship} from "./types/RacingSeriesHasRacingEventRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"

export async function getConnectedRacingEvents(id: number) {
    const sourceNode = await getRacingSeriesById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/racing-series/${id}/has-racing-event`)).data as ApiRacingSeriesHasRacingEventRelationship[]
    const data: RacingSeriesHasRacingEventRelationship[] = []

    apiData.forEach(apiItem => {
        data.push({
            id,
            name: DataRelationshipType.RACING_SERIES_HAS_RACING_EVENT,
            source_node: sourceNode,
            source_node_type: DataNodeType.RACING_SERIES,
            partner_node: apiItem.data.relationship_partner.data,
            partner_node_type: DataNodeType.RACING_EVENT,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
