import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {PriceNode} from "./PriceNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {ImageNode} from "../../images/types/ImageNode"

export type PriceHasImageRelationship = {
    id: number
    name: DataRelationshipType.PRICE_HAS_IMAGE
    source_node: PriceNode
    source_node_type: DataNodeType.PRICE
    partner_node: ImageNode
    partner_node_type: DataNodeType.IMAGE
    created_at: string
    updated_at: string
}
