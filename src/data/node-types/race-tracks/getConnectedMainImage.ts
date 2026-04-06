import {requestDataFromApi} from "../../requestDataFromApi"
import {getRaceTrackById} from "./getRaceTrackById"
import type {ApiRaceTrackHasPrimeImageRelationship} from "./types/ApiRaceTrackHasPrimeImageRelationship"
import type {RaceTrackHasMainImageRelationship} from "./types/RaceTrackHasMainImageRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {ImageNode} from "../images/types/ImageNode"

export async function getConnectedMainImage(id: number) {
    const sourceNode = await getRaceTrackById(id)
    if (!sourceNode) {
        return null
    }

    const apiData = (await requestDataFromApi(`/race-tracks/${id}/has-prime-image`)) as ApiRaceTrackHasPrimeImageRelationship
    if (!apiData || !apiData.data) {
        return null
    }

    const relationship: RaceTrackHasMainImageRelationship = {
        id: apiData.data.relationship_id,
        name: DataRelationshipType.RACE_TRACK_HAS_MAIN_IMAGE,
        source_node: sourceNode,
        source_node_type: DataNodeType.RACE_TRACK,
        partner_node: convertApiRelationshipNodeToDataNode(apiData.data.partner_node) as ImageNode,
        partner_node_type: DataNodeType.IMAGE,
        created_at: apiData.data.created_at,
        updated_at: apiData.data.updated_at,
    }

    return relationship
}
