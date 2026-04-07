import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {BrandNode} from "./BrandNode"
import type {CompanyNode} from "../../companies/types/CompanyNode"

export type BrandBelongsToCompanyRelationship = {
    id: number
    name: DataRelationshipType.BRAND_BELONGS_TO_COMPANY
    source_node: BrandNode
    partner_node: CompanyNode
    created_at: string
    updated_at: string
}
