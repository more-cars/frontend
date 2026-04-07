import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {PriceNode} from "./PriceNode"
import type {ImageNode} from "../../images/types/ImageNode"

export type PriceHasImageRelationship = {
    id: number
    name: DataRelationshipType.PRICE_HAS_IMAGE
    source_node: PriceNode
    partner_node: ImageNode
    created_at: string
    updated_at: string
}
