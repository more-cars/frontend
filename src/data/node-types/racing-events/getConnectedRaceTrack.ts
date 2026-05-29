import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiRacingEventTookPlaceAtRaceTrackRelationship} from "./types/ApiRacingEventTookPlaceAtRaceTrackRelationship"
import {getRacingEventById} from "./getRacingEventById"
import type {RacingEventTookPlaceAtRaceTrackRelationship} from "./types/RacingEventTookPlaceAtRaceTrackRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import {convertStringToApiNodeType} from "../../../../tests/_toolbox/convertStringToNodeType"
import type {RaceTrackNode} from "../race-tracks/types/RaceTrackNode"

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
        id: apiData.data.data?.relationship_id,
        name: DataRelationshipType.RACING_EVENT_TOOK_PLACE_AT_RACE_TRACK,
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
