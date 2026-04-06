import {requestDataFromApi} from "../../requestDataFromApi"
import {getBrandById} from "./getBrandById"
import type {ApiBrandHasVideoRelationship} from "./types/ApiBrandHasVideoRelationship"
import type {BrandHasVideoRelationship} from "./types/BrandHasVideoRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {VideoNode} from "../videos/types/VideoNode"

export async function getConnectedVideos(id: number) {
    const sourceNode = await getBrandById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/brands/${id}/has-video`)).data as ApiBrandHasVideoRelationship[]
    const data: BrandHasVideoRelationship[] = []

    apiData.forEach(apiItem => {
        data.push({
            id: apiItem.data.relationship_id,
            name: DataRelationshipType.BRAND_HAS_VIDEO,
            source_node: sourceNode,
            source_node_type: DataNodeType.BRAND,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data.partner_node) as VideoNode,
            partner_node_type: DataNodeType.VIDEO,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
