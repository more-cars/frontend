import {requestDataFromApi} from "../../requestDataFromApi"
import {getTrackLayoutById} from "./getTrackLayoutById"
import type {ApiTrackLayoutHasPrimeImageRelationship} from "./types/ApiTrackLayoutHasPrimeImageRelationship"
import type {TrackLayoutHasMainImageRelationship} from "./types/TrackLayoutHasMainImageRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import {convertStringToApiNodeType} from "../../../../tests/_toolbox/convertStringToNodeType"
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

    const relationship: TrackLayoutHasMainImageRelationship = {
        id: apiData.data.data?.relationship_id,
        name: DataRelationshipType.TRACK_LAYOUT_HAS_MAIN_IMAGE,
        source_node: sourceNode,
        partner_node: convertApiRelationshipNodeToDataNode(apiData.data.data?.partner_node || {
            node_type: convertStringToApiNodeType(apiData.data.type),
            data: {...apiData.data.attributes, id: apiData.data.id},
        }) as ImageNode,
        created_at: apiData.data.data?.created_at,
        updated_at: apiData.data.data?.updated_at,
    }

    return relationship
}
