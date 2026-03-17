import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {MotorShowNode} from "./MotorShowNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {CarModelVariantNode} from "../../car-model-variants/types/CarModelVariantNode"

export type MotorShowPresentsCarModelVariantRelationship = {
    id: number
    name: DataRelationshipType.MOTOR_SHOW_PRESENTS_CAR_MODEL_VARIANT
    source_node: MotorShowNode
    source_node_type: DataNodeType.MOTOR_SHOW
    partner_node: CarModelVariantNode
    partner_node_type: DataNodeType.CAR_MODEL_VARIANT
    created_at: string
    updated_at: string
}
