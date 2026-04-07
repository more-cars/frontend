import {requestDataFromApi} from "../../requestDataFromApi"
import {getTrackLayoutById} from "./getTrackLayoutById"
import type {ApiTrackLayoutIsFeaturedInRacingGameRelationship} from "./types/ApiTrackLayoutIsFeaturedInRacingGameRelationship"
import type {TrackLayoutIsFeaturedInRacingGameRelationship} from "./types/TrackLayoutIsFeaturedInRacingGameRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
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
            id: apiItem.data.relationship_id,
            name: DataRelationshipType.TRACK_LAYOUT_IS_FEATURED_IN_RACING_GAME,
            source_node: sourceNode,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data.partner_node) as RacingGameNode,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
