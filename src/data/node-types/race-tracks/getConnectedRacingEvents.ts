import {requestDataFromApi} from "../../requestDataFromApi"
import {getRaceTrackById} from "./getRaceTrackById"
import type {ApiRaceTrackHostedRacingEventRelationship} from "./types/ApiRaceTrackHostedRacingEventRelationship"
import type {RaceTrackHostedRacingEventRelationship} from "./types/RaceTrackHostedRacingEventRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {RacingEventNode} from "../racing-events/types/RacingEventNode"

export async function getConnectedRacingEvents(id: number) {
    const sourceNode = await getRaceTrackById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/race-tracks/${id}/hosted-racing-event`)).data as ApiRaceTrackHostedRacingEventRelationship[]
    const data: RaceTrackHostedRacingEventRelationship[] = []

    apiData.forEach(apiItem => {
        data.push({
            id: apiItem.data.relationship_id,
            name: DataRelationshipType.RACE_TRACK_HOSTED_RACING_EVENT,
            source_node: sourceNode,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data.partner_node) as RacingEventNode,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
