import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {CarModelVariantNode} from "./CarModelVariantNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {CarModelNode} from "../../car-models/types/CarModelNode"

export type CarModelVariantIsVariantOfRelationship = {
    id: number
    name: DataRelationshipType.CAR_MODEL_VARIANT_IS_VARIANT_OF
    source_node: CarModelVariantNode
    source_node_type: DataNodeType.CAR_MODEL_VARIANT
    partner_node: CarModelNode
    partner_node_type: DataNodeType.CAR_MODEL
    created_at: string
    updated_at: string
}
