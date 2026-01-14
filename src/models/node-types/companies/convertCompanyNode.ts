import {CompanyNode} from "../../../data/node-types/companies/types/CompanyNode"
import {Company} from "./types/Company"

export function convertCompanyNode(dataNode: CompanyNode) {
    const company: Company = {
        id: dataNode.id,
        name: dataNode.name,
        founded: dataNode.founded || null,
        defunct: dataNode.defunct || null,
        headquarters_location: dataNode.headquarters_location || null,
        legal_headquarters_location: dataNode.legal_headquarters_location || null,
        created_at: dataNode.created_at,
        updated_at: dataNode.updated_at,
    }

    return company
}
