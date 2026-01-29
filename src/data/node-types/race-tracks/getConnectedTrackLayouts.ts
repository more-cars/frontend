import {requestDataFromApi} from "../../requestDataFromApi"
import {getRaceTrackById} from "./getRaceTrackById"
import type {ApiRaceTrackHasLayoutRelationship} from "./types/ApiRaceTrackHasLayoutRelationship"
import type {RaceTrackHasLayoutRelationship} from "./types/RaceTrackHasLayoutRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"

export async function getConnectedTrackLayouts(id: number) {
    const sourceNode = await getRaceTrackById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/race-tracks/${id}/has-layout`)).data as ApiRaceTrackHasLayoutRelationship[]
    const data: RaceTrackHasLayoutRelationship[] = []

    apiData.forEach(apiItem => {
        data.push({
            id,
            name: DataRelationshipType.RACE_TRACK_HAS_LAYOUT,
            source_node: sourceNode,
            source_node_type: DataNodeType.RACE_TRACK,
            partner_node: apiItem.data.relationship_partner.data,
            partner_node_type: DataNodeType.TRACK_LAYOUT,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
