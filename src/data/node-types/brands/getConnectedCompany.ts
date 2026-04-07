import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiBrandBelongsToCompanyRelationship} from "./types/ApiBrandBelongsToCompanyRelationship"
import {getBrandById} from "./getBrandById"
import type {BrandBelongsToCompanyRelationship} from "./types/BrandBelongsToCompanyRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {CompanyNode} from "../companies/types/CompanyNode"

export async function getConnectedCompany(id: number) {
    const sourceNode = await getBrandById(id)
    if (!sourceNode) {
        return null
    }

    const apiData = (await requestDataFromApi(`/brands/${id}/belongs-to-company`)) as ApiBrandBelongsToCompanyRelationship
    if (!apiData || !apiData.data) {
        return null
    }

    const data: BrandBelongsToCompanyRelationship = {
        id: apiData.data.relationship_id,
        name: DataRelationshipType.BRAND_BELONGS_TO_COMPANY,
        source_node: sourceNode,
        partner_node: convertApiRelationshipNodeToDataNode(apiData.data.partner_node) as CompanyNode,
        created_at: apiData.data.created_at,
        updated_at: apiData.data.updated_at,
    }

    return data
}
