import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {CompanyNode} from "./CompanyNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {BrandNode} from "../../brands/types/BrandNode"

export type CompanyHasBrandRelationship = {
    id: number
    name: DataRelationshipType.COMPANY_HAS_BRAND
    source_node: CompanyNode
    source_node_type: DataNodeType.COMPANY
    partner_node: BrandNode
    partner_node_type: DataNodeType.BRAND
    created_at: string
    updated_at: string
}
