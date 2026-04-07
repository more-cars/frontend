import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {CompanyNode} from "./CompanyNode"
import type {BrandNode} from "../../brands/types/BrandNode"

export type CompanyHasBrandRelationship = {
    id: number
    name: DataRelationshipType.COMPANY_HAS_BRAND
    source_node: CompanyNode
    partner_node: BrandNode
    created_at: string
    updated_at: string
}
