import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiRacingEventTookPlaceAtRaceTrackRelationship} from "./types/ApiRacingEventTookPlaceAtRaceTrackRelationship"
import {getRacingEventById} from "./getRacingEventById"
import type {RacingEventTookPlaceAtRaceTrackRelationship} from "./types/RacingEventTookPlaceAtRaceTrackRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"

export async function getConnectedRaceTrack(id: number) {
    const sourceNode = await getRacingEventById(id)
    if (!sourceNode) {
        return null
    }

    const apiData = (await requestDataFromApi(`/racing-events/${id}/took-place-at-race-track`)) as ApiRacingEventTookPlaceAtRaceTrackRelationship
    if (!apiData || !apiData.data) {
        return null
    }

    const data: RacingEventTookPlaceAtRaceTrackRelationship = {
        id,
        name: DataRelationshipType.RACING_EVENT_TOOK_PLACE_AT_RACE_TRACK,
        source_node: sourceNode,
        source_node_type: DataNodeType.RACING_EVENT,
        partner_node: apiData.data.relationship_partner.data,
        partner_node_type: DataNodeType.RACE_TRACK,
        created_at: apiData.data.created_at,
        updated_at: apiData.data.updated_at,
    }

    return data
}
