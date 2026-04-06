import {requestDataFromApi} from "../../requestDataFromApi"
import {getCompanyById} from "./getCompanyById"
import type {ApiCompanyHasVideoRelationship} from "./types/ApiCompanyHasVideoRelationship"
import type {CompanyHasVideoRelationship} from "./types/CompanyHasVideoRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {VideoNode} from "../videos/types/VideoNode"

export async function getConnectedVideos(id: number) {
    const sourceNode = await getCompanyById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/companies/${id}/has-video`)).data as ApiCompanyHasVideoRelationship[]
    const data: CompanyHasVideoRelationship[] = []

    apiData.forEach(apiItem => {
        data.push({
            id: apiItem.data.relationship_id,
            name: DataRelationshipType.COMPANY_HAS_VIDEO,
            source_node: sourceNode,
            source_node_type: DataNodeType.COMPANY,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data.partner_node) as VideoNode,
            partner_node_type: DataNodeType.VIDEO,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
