import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {PriceNode} from "./PriceNode"
import type {ImageNode} from "../../images/types/ImageNode"

export type PriceHasMainImageRelationship = {
    id: number
    name: DataRelationshipType.PRICE_HAS_MAIN_IMAGE
    source_node: PriceNode
    partner_node: ImageNode
    created_at: string
    updated_at: string
}
