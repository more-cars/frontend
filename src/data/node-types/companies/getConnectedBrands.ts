import {requestDataFromApi} from "../../requestDataFromApi"
import {getCompanyById} from "./getCompanyById"
import type {ApiCompanyHasBrandRelationship} from "./types/ApiCompanyHasBrandRelationship"
import type {CompanyHasBrandRelationship} from "./types/CompanyHasBrandRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"

export async function getConnectedBrands(id: number) {
    const sourceNode = await getCompanyById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/companies/${id}/has-brand`)).data as ApiCompanyHasBrandRelationship[]
    const data: CompanyHasBrandRelationship[] = []

    apiData.forEach(apiItem => {
        data.push({
            id,
            name: DataRelationshipType.COMPANY_HAS_BRAND,
            source_node: sourceNode,
            source_node_type: DataNodeType.COMPANY,
            partner_node: apiItem.data.relationship_partner.data,
            partner_node_type: DataNodeType.BRAND,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
