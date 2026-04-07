import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {ModelCarNode} from "./ModelCarNode"
import type {CarModelVariantNode} from "../../car-model-variants/types/CarModelVariantNode"

export type ModelCarIsScaleModelOfCarModelVariantRelationship = {
    id: number
    name: DataRelationshipType.MODEL_CAR_IS_SCALE_MODEL_OF_CAR_MODEL_VARIANT
    source_node: ModelCarNode
    partner_node: CarModelVariantNode
    created_at: string
    updated_at: string
}
