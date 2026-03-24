import {CompanyNode} from "../../../data/node-types/companies/types/CompanyNode"
import {Company} from "./types/Company"
import {ModelNodeType} from "../../types/ModelNodeType"

export function convertCompanyNode(dataNode: CompanyNode) {
    const company: Company = {
        type: ModelNodeType.COMPANY,
        fields: {
            id: dataNode.data.id,
            name: dataNode.data.name,
            founded: dataNode.data.founded || null,
            defunct: dataNode.data.defunct || null,
            headquarters_location: dataNode.data.headquarters_location || null,
            legal_headquarters_location: dataNode.data.legal_headquarters_location || null,
            created_at: dataNode.data.created_at,
            updated_at: dataNode.data.updated_at,
        }
    }

    return company
}
