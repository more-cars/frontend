import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {CompanyNode} from "./CompanyNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {ImageNode} from "../../images/types/ImageNode"

export type CompanyHasMainImageRelationship = {
    id: number
    name: DataRelationshipType.COMPANY_HAS_MAIN_IMAGE
    source_node: CompanyNode
    source_node_type: DataNodeType.COMPANY
    partner_node: ImageNode
    partner_node_type: DataNodeType.IMAGE
    created_at: string
    updated_at: string
}
