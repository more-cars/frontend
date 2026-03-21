import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {CarModelVariantNode} from "./CarModelVariantNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {PriceNode} from "../../prices/types/PriceNode"

export type CarModelVariantHasPriceRelationship = {
    id: number
    name: DataRelationshipType.CAR_MODEL_VARIANT_HAS_PRICE
    source_node: CarModelVariantNode
    source_node_type: DataNodeType.CAR_MODEL_VARIANT
    partner_node: PriceNode
    partner_node_type: DataNodeType.PRICE
    created_at: string
    updated_at: string
}
