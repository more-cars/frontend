import {requestDataFromApi} from "../../requestDataFromApi"
import {getRacingGameById} from "./getRacingGameById"
import type {ApiRacingGameFeaturesTrackLayoutRelationship} from "./types/ApiRacingGameFeaturesTrackLayoutRelationship"
import type {RacingGameFeaturesTrackLayoutRelationship} from "./types/RacingGameFeaturesTrackLayoutRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {TrackLayoutNode} from "../track-layouts/types/TrackLayoutNode"

export async function getConnectedTrackLayouts(id: number) {
    const sourceNode = await getRacingGameById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/racing-games/${id}/features-track-layout`)).data as ApiRacingGameFeaturesTrackLayoutRelationship[]
    const data: RacingGameFeaturesTrackLayoutRelationship[] = []

    apiData.forEach(apiItem => {
        data.push({
            id,
            name: DataRelationshipType.RACING_GAME_FEATURES_TRACK_LAYOUT,
            source_node: sourceNode,
            source_node_type: DataNodeType.RACING_GAME,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data.partner_node.data) as TrackLayoutNode,
            partner_node_type: DataNodeType.TRACK_LAYOUT,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
