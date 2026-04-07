import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {CompanyNode} from "./CompanyNode"
import type {ImageNode} from "../../images/types/ImageNode"

export type CompanyHasMainImageRelationship = {
    id: number
    name: DataRelationshipType.COMPANY_HAS_MAIN_IMAGE
    source_node: CompanyNode
    partner_node: ImageNode
    created_at: string
    updated_at: string
}
