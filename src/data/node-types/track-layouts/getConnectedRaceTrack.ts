import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiTrackLayoutBelongsToRaceTrackRelationship} from "./types/ApiTrackLayoutBelongsToRaceTrackRelationship"
import {getTrackLayoutById} from "./getTrackLayoutById"
import type {TrackLayoutBelongsToRaceTrackRelationship} from "./types/TrackLayoutBelongsToRaceTrackRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import {convertStringToApiNodeType} from "../../../../tests/_toolbox/convertStringToNodeType"
import type {RaceTrackNode} from "../race-tracks/types/RaceTrackNode"

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
        id: apiData.data.data?.relationship_id,
        name: DataRelationshipType.TRACK_LAYOUT_BELONGS_TO_RACE_TRACK,
        source_node: sourceNode,
        partner_node: convertApiRelationshipNodeToDataNode(apiData.data.data?.partner_node || {
            node_type: convertStringToApiNodeType(apiData.data.type),
            data: {...apiData.data.attributes, id: apiData.data.id},
        }) as RaceTrackNode,
        created_at: apiData.data.data?.created_at,
        updated_at: apiData.data.data?.updated_at,
    }

    return data
}
