import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {CarModelNode} from "./CarModelNode"
import type {CarModelVariantNode} from "../../car-model-variants/types/CarModelVariantNode"

export type CarModelHasVariantRelationship = {
    id: number
    name: DataRelationshipType.CAR_MODEL_HAS_VARIANT
    source_node: CarModelNode
    partner_node: CarModelVariantNode
    created_at: string
    updated_at: string
}
