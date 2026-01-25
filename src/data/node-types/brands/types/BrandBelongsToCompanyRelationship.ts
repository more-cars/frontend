import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {BrandNode} from "./BrandNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {CompanyNode} from "../../companies/types/CompanyNode"

export type BrandBelongsToCompanyRelationship = {
    id: number
    name: DataRelationshipType.BRAND_BELONGS_TO_COMPANY
    source_node: BrandNode
    source_node_type: DataNodeType.BRAND
    partner_node: CompanyNode
    partner_node_type: DataNodeType.COMPANY
    created_at: string
    updated_at: string
}
