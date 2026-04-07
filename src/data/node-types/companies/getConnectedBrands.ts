import {requestDataFromApi} from "../../requestDataFromApi"
import {getCompanyById} from "./getCompanyById"
import type {ApiCompanyHasBrandRelationship} from "./types/ApiCompanyHasBrandRelationship"
import type {CompanyHasBrandRelationship} from "./types/CompanyHasBrandRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {BrandNode} from "../brands/types/BrandNode"

export async function getConnectedBrands(id: number) {
    const sourceNode = await getCompanyById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/companies/${id}/has-brand`)).data as ApiCompanyHasBrandRelationship[]
    const data: CompanyHasBrandRelationship[] = []

    apiData.forEach(apiItem => {
        data.push({
            id: apiItem.data.relationship_id,
            name: DataRelationshipType.COMPANY_HAS_BRAND,
            source_node: sourceNode,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data.partner_node) as BrandNode,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
