import {requestDataFromApi} from "../../requestDataFromApi"
import {getRaceTrackById} from "./getRaceTrackById"
import type {ApiRaceTrackHostedRacingEventRelationship} from "./types/ApiRaceTrackHostedRacingEventRelationship"
import type {RaceTrackHostedRacingEventRelationship} from "./types/RaceTrackHostedRacingEventRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"

export async function getConnectedRacingEvents(id: number) {
    const sourceNode = await getRaceTrackById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/race-tracks/${id}/hosted-racing-event`)).data as ApiRaceTrackHostedRacingEventRelationship[]
    const data: RaceTrackHostedRacingEventRelationship[] = []

    apiData.forEach(apiItem => {
        data.push({
            id,
            name: DataRelationshipType.RACE_TRACK_HOSTED_RACING_EVENT,
            source_node: sourceNode,
            source_node_type: DataNodeType.RACE_TRACK,
            partner_node: apiItem.data.relationship_partner.data,
            partner_node_type: DataNodeType.RACING_EVENT,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
