import {requestDataFromApi} from "../../requestDataFromApi"
import {getCompanyById} from "./getCompanyById"
import type {ApiCompanyHasPrimeImageRelationship} from "./types/ApiCompanyHasPrimeImageRelationship"
import type {CompanyHasMainImageRelationship} from "./types/CompanyHasMainImageRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"

export async function getConnectedMainImage(id: number) {
    const apiData = (await requestDataFromApi(`/companies/${id}/has-prime-image`)) as ApiCompanyHasPrimeImageRelationship
    const sourceNode = await getCompanyById(id)

    if (!apiData || !sourceNode) {
        return null
    }

    const relationship: CompanyHasMainImageRelationship = {
        id,
        name: DataRelationshipType.COMPANY_HAS_MAIN_IMAGE,
        source_node: sourceNode,
        source_node_type: DataNodeType.COMPANY,
        partner_node: apiData.data.relationship_partner.data,
        partner_node_type: DataNodeType.IMAGE,
        created_at: apiData.data.created_at,
        updated_at: apiData.data.updated_at,
    }

    return relationship
}
