import {requestDataFromApi} from "../../requestDataFromApi"
import {getCompanyById} from "./getCompanyById"
import type {ApiCompanyHasImageRelationship} from "./types/ApiCompanyHasImageRelationship"
import type {CompanyHasImageRelationship} from "./types/CompanyHasImageRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
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
            id: apiItem.data.relationship_id,
            name: DataRelationshipType.COMPANY_HAS_IMAGE,
            source_node: sourceNode,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data.partner_node) as ImageNode,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
