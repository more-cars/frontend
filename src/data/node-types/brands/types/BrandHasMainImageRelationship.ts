import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {BrandNode} from "./BrandNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {ImageNode} from "../../images/types/ImageNode"

export type BrandHasMainImageRelationship = {
    id: number
    name: DataRelationshipType.BRAND_HAS_MAIN_IMAGE
    source_node: BrandNode
    source_node_type: DataNodeType.BRAND
    partner_node: ImageNode
    partner_node_type: DataNodeType.IMAGE
    created_at: string
    updated_at: string
}
