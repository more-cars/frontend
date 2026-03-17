import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {CarModelVariantNode} from "./CarModelVariantNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {MotorShowNode} from "../../motor-shows/types/MotorShowNode"

export type CarModelVariantPresentedAtMotorShowRelationship = {
    id: number
    name: DataRelationshipType.CAR_MODEL_VARIANT_PRESENTED_AT_MOTOR_SHOW
    source_node: CarModelVariantNode
    source_node_type: DataNodeType.CAR_MODEL_VARIANT
    partner_node: MotorShowNode
    partner_node_type: DataNodeType.MOTOR_SHOW
    created_at: string
    updated_at: string
}
