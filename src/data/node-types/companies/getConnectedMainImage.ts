import {requestDataFromApi} from "../../requestDataFromApi"
import {getCompanyById} from "./getCompanyById"
import type {ApiCompanyHasPrimeImageRelationship} from "./types/ApiCompanyHasPrimeImageRelationship"
import type {CompanyHasMainImageRelationship} from "./types/CompanyHasMainImageRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {ImageNode} from "../images/types/ImageNode"

export async function getConnectedMainImage(id: number) {
    const sourceNode = await getCompanyById(id)
    if (!sourceNode) {
        return null
    }

    const apiData = (await requestDataFromApi(`/companies/${id}/has-prime-image`)) as ApiCompanyHasPrimeImageRelationship
    if (!apiData || !apiData.data) {
        return null
    }

    const relationship: CompanyHasMainImageRelationship = {
        id: apiData.data.relationship_id,
        name: DataRelationshipType.COMPANY_HAS_MAIN_IMAGE,
        source_node: sourceNode,
        partner_node: convertApiRelationshipNodeToDataNode(apiData.data.partner_node) as ImageNode,
        created_at: apiData.data.created_at,
        updated_at: apiData.data.updated_at,
    }

    return relationship
}
