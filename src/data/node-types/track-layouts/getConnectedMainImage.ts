import {requestDataFromApi} from "../../requestDataFromApi"
import {getTrackLayoutById} from "./getTrackLayoutById"
import type {ApiTrackLayoutHasPrimeImageRelationship} from "./types/ApiTrackLayoutHasPrimeImageRelationship"
import type {TrackLayoutHasMainImageRelationship} from "./types/TrackLayoutHasMainImageRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {ImageNode} from "../images/types/ImageNode"

export async function getConnectedMainImage(id: number) {
    const sourceNode = await getTrackLayoutById(id)
    if (!sourceNode) {
        return null
    }

    const apiData = (await requestDataFromApi(`/track-layouts/${id}/has-prime-image`)) as ApiTrackLayoutHasPrimeImageRelationship
    if (!apiData || !apiData.data) {
        return null
    }

    if (!apiData || !sourceNode) {
        return null
    }

    const relationship: TrackLayoutHasMainImageRelationship = {
        id,
        name: DataRelationshipType.TRACK_LAYOUT_HAS_MAIN_IMAGE,
        source_node: sourceNode,
        source_node_type: DataNodeType.TRACK_LAYOUT,
        partner_node: convertApiRelationshipNodeToDataNode(apiData.data.partner_node.data) as ImageNode,
        partner_node_type: DataNodeType.IMAGE,
        created_at: apiData.data.created_at,
        updated_at: apiData.data.updated_at,
    }

    return relationship
}
