import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiTrackLayoutBelongsToRaceTrackRelationship} from "./types/ApiTrackLayoutBelongsToRaceTrackRelationship"
import {getTrackLayoutById} from "./getTrackLayoutById"
import type {TrackLayoutBelongsToRaceTrackRelationship} from "./types/TrackLayoutBelongsToRaceTrackRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"

export async function getConnectedRaceTrack(id: number) {
    const sourceNode = await getTrackLayoutById(id)
    if (!sourceNode) {
        return null
    }

    const apiData = (await requestDataFromApi(`/track-layouts/${id}/belongs-to-race-track`)) as ApiTrackLayoutBelongsToRaceTrackRelationship
    if (!apiData || !apiData.data) {
        return null
    }

    const data: TrackLayoutBelongsToRaceTrackRelationship = {
        id,
        name: DataRelationshipType.TRACK_LAYOUT_BELONGS_TO_RACE_TRACK,
        source_node: sourceNode,
        source_node_type: DataNodeType.TRACK_LAYOUT,
        partner_node: apiData.data.relationship_partner.data,
        partner_node_type: DataNodeType.RACE_TRACK,
        created_at: apiData.data.created_at,
        updated_at: apiData.data.updated_at,
    }

    return data
}
