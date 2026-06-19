import {requestDataFromApi} from "../../requestDataFromApi"
import {getTrackLayoutById} from "./getTrackLayoutById"
import type {ApiTrackLayoutHasImageRelationship} from "./types/ApiTrackLayoutHasImageRelationship"
import type {TrackLayoutHasImageRelationship} from "./types/TrackLayoutHasImageRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import {convertStringToApiNodeType} from "../../lib/convertStringToApiNodeType"
import type {ImageNode} from "../images/types/ImageNode"

export async function getConnectedImages(id: number) {
    const sourceNode = await getTrackLayoutById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/track-layouts/${id}/has-image`)) as ApiTrackLayoutHasImageRelationship
    const data: TrackLayoutHasImageRelationship[] = []

    apiData.data.forEach(apiItem => {
        data.push({
            id: apiItem.data?.relationship_id,
            name: DataRelationshipType.TRACK_LAYOUT_HAS_IMAGE,
            source_node: sourceNode,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data?.partner_node || {
                node_type: convertStringToApiNodeType(apiItem.type),
                data: {...apiItem.attributes, id: apiItem.id},
            }) as ImageNode,
            created_at: apiItem.data?.created_at,
            updated_at: apiItem.data?.updated_at,
        })
    })

    return data
}
