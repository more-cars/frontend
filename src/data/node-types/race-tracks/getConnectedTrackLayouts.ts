import {requestDataFromApi} from "../../requestDataFromApi"
import {getRaceTrackById} from "./getRaceTrackById"
import type {ApiRaceTrackHasLayoutRelationship} from "./types/ApiRaceTrackHasLayoutRelationship"
import type {RaceTrackHasLayoutRelationship} from "./types/RaceTrackHasLayoutRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {TrackLayoutNode} from "../track-layouts/types/TrackLayoutNode"

export async function getConnectedTrackLayouts(id: number) {
    const sourceNode = await getRaceTrackById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/race-tracks/${id}/has-layout`)).data as ApiRaceTrackHasLayoutRelationship[]
    const data: RaceTrackHasLayoutRelationship[] = []

    apiData.forEach(apiItem => {
        data.push({
            id: apiItem.data.relationship_id,
            name: DataRelationshipType.RACE_TRACK_HAS_LAYOUT,
            source_node: sourceNode,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data.partner_node) as TrackLayoutNode,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
