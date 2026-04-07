import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {MotorShowNode} from "./MotorShowNode"
import type {CarModelVariantNode} from "../../car-model-variants/types/CarModelVariantNode"

export type MotorShowPresentsCarModelVariantRelationship = {
    id: number
    name: DataRelationshipType.MOTOR_SHOW_PRESENTS_CAR_MODEL_VARIANT
    source_node: MotorShowNode
    partner_node: CarModelVariantNode
    created_at: string
    updated_at: string
}
