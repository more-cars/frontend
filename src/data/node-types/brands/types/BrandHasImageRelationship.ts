import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {BrandNode} from "./BrandNode"
import type {ImageNode} from "../../images/types/ImageNode"

export type BrandHasImageRelationship = {
    id: number
    name: DataRelationshipType.BRAND_HAS_IMAGE
    source_node: BrandNode
    partner_node: ImageNode
    created_at: string
    updated_at: string
}
