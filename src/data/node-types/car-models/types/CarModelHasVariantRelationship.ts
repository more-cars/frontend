import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {CarModelNode} from "./CarModelNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {CarModelVariantNode} from "../../car-model-variants/types/CarModelVariantNode"

export type CarModelHasVariantRelationship = {
    id: number
    name: DataRelationshipType.CAR_MODEL_HAS_VARIANT
    source_node: CarModelNode
    source_node_type: DataNodeType.CAR_MODEL
    partner_node: CarModelVariantNode
    partner_node_type: DataNodeType.CAR_MODEL_VARIANT
    created_at: string
    updated_at: string
}
