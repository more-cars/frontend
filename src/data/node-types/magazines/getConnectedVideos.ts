import {requestDataFromApi} from "../../requestDataFromApi"
import {getMagazineById} from "./getMagazineById"
import type {ApiMagazineHasVideoRelationship} from "./types/ApiMagazineHasVideoRelationship"
import type {MagazineHasVideoRelationship} from "./types/MagazineHasVideoRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {VideoNode} from "../videos/types/VideoNode"

export async function getConnectedVideos(id: number) {
    const sourceNode = await getMagazineById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/magazines/${id}/has-video`)).data as ApiMagazineHasVideoRelationship[]
    const data: MagazineHasVideoRelationship[] = []

    apiData.forEach(apiItem => {
        data.push({
            id: apiItem.data.relationship_id,
            name: DataRelationshipType.MAGAZINE_HAS_VIDEO,
            source_node: sourceNode,
            source_node_type: DataNodeType.MAGAZINE,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data.partner_node) as VideoNode,
            partner_node_type: DataNodeType.VIDEO,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
