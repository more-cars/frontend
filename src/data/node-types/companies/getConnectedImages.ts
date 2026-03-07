import {requestDataFromApi} from "../../requestDataFromApi"
import {getCompanyById} from "./getCompanyById"
import type {ApiCompanyHasImageRelationship} from "./types/ApiCompanyHasImageRelationship"
import type {CompanyHasImageRelationship} from "./types/CompanyHasImageRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {ImageNode} from "../images/types/ImageNode"

export async function getConnectedImages(id: number) {
    const sourceNode = await getCompanyById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/companies/${id}/has-image`)).data as ApiCompanyHasImageRelationship[]
    const data: CompanyHasImageRelationship[] = []

    apiData.forEach(apiItem => {
        data.push({
            id,
            name: DataRelationshipType.COMPANY_HAS_IMAGE,
            source_node: sourceNode,
            source_node_type: DataNodeType.COMPANY,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data.partner_node.data) as ImageNode,
            partner_node_type: DataNodeType.IMAGE,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
