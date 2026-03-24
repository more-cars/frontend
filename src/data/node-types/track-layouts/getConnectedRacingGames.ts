import {requestDataFromApi} from "../../requestDataFromApi"
import {getTrackLayoutById} from "./getTrackLayoutById"
import type {ApiTrackLayoutIsFeaturedInRacingGameRelationship} from "./types/ApiTrackLayoutIsFeaturedInRacingGameRelationship"
import type {TrackLayoutIsFeaturedInRacingGameRelationship} from "./types/TrackLayoutIsFeaturedInRacingGameRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {RacingGameNode} from "../racing-games/types/RacingGameNode"

export async function getConnectedRacingGames(id: number) {
    const sourceNode = await getTrackLayoutById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/track-layouts/${id}/is-featured-in-racing-game`)).data as ApiTrackLayoutIsFeaturedInRacingGameRelationship[]
    const data: TrackLayoutIsFeaturedInRacingGameRelationship[] = []

    apiData.forEach(apiItem => {
        data.push({
            id,
            name: DataRelationshipType.TRACK_LAYOUT_IS_FEATURED_IN_RACING_GAME,
            source_node: sourceNode,
            source_node_type: DataNodeType.TRACK_LAYOUT,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data.partner_node) as RacingGameNode,
            partner_node_type: DataNodeType.RACING_GAME,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
