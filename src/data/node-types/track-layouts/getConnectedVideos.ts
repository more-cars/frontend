import {requestDataFromApi} from "../../requestDataFromApi"
import {getTrackLayoutById} from "./getTrackLayoutById"
import type {ApiTrackLayoutHasVideoRelationship} from "./types/ApiTrackLayoutHasVideoRelationship"
import type {TrackLayoutHasVideoRelationship} from "./types/TrackLayoutHasVideoRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import {convertStringToApiNodeType} from "../../lib/convertStringToApiNodeType"
import type {VideoNode} from "../videos/types/VideoNode"

export async function getConnectedVideos(id: number) {
    const sourceNode = await getTrackLayoutById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/track-layouts/${id}/has-video`)) as ApiTrackLayoutHasVideoRelationship
    const data: TrackLayoutHasVideoRelationship[] = []

    apiData.data.forEach(apiItem => {
        data.push({
            id: apiItem.data?.relationship_id,
            name: DataRelationshipType.TRACK_LAYOUT_HAS_VIDEO,
            source_node: sourceNode,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data?.partner_node || {
                node_type: convertStringToApiNodeType(apiItem.type),
                data: {...apiItem.attributes, id: apiItem.id},
            }) as VideoNode,
            created_at: apiItem.data?.created_at,
            updated_at: apiItem.data?.updated_at,
        })
    })

    return data
}
