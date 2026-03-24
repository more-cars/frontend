import {requestDataFromApi} from "../../requestDataFromApi"
import {getRacingGameById} from "./getRacingGameById"
import type {ApiRacingGameHasPrimeImageRelationship} from "./types/ApiRacingGameHasPrimeImageRelationship"
import type {RacingGameHasMainImageRelationship} from "./types/RacingGameHasMainImageRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {ImageNode} from "../images/types/ImageNode"

export async function getConnectedMainImage(id: number) {
    const sourceNode = await getRacingGameById(id)
    if (!sourceNode) {
        return null
    }

    const apiData = (await requestDataFromApi(`/racing-games/${id}/has-prime-image`)) as ApiRacingGameHasPrimeImageRelationship
    if (!apiData || !apiData.data) {
        return null
    }

    if (!apiData || !sourceNode) {
        return null
    }

    const relationship: RacingGameHasMainImageRelationship = {
        id,
        name: DataRelationshipType.RACING_GAME_HAS_MAIN_IMAGE,
        source_node: sourceNode,
        source_node_type: DataNodeType.RACING_GAME,
        partner_node: convertApiRelationshipNodeToDataNode(apiData.data.partner_node) as ImageNode,
        partner_node_type: DataNodeType.IMAGE,
        created_at: apiData.data.created_at,
        updated_at: apiData.data.updated_at,
    }

    return relationship
}
