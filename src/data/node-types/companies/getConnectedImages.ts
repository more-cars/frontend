import {requestDataFromApi} from "../../requestDataFromApi"
import {getCompanyById} from "./getCompanyById"
import type {ApiCompanyHasImageRelationship} from "./types/ApiCompanyHasImageRelationship"
import type {CompanyHasImageRelationship} from "./types/CompanyHasImageRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"

export async function getConnectedImages(id: number) {
    const apiData = (await requestDataFromApi(`/companies/${id}/has-image`)).data as ApiCompanyHasImageRelationship[]
    const data: CompanyHasImageRelationship[] = []
    const sourceNode = await getCompanyById(id)

    if (!sourceNode) {
        return []
    }

    apiData.forEach(apiItem => {
        data.push({
            id,
            name: DataRelationshipType.COMPANY_HAS_IMAGE,
            source_node: sourceNode,
            source_node_type: DataNodeType.COMPANY,
            partner_node: apiItem.data.relationship_partner.data,
            partner_node_type: DataNodeType.IMAGE,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
