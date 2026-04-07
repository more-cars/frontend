import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {CarModelVariantNode} from "./CarModelVariantNode"
import type {MotorShowNode} from "../../motor-shows/types/MotorShowNode"

export type CarModelVariantPresentedAtMotorShowRelationship = {
    id: number
    name: DataRelationshipType.CAR_MODEL_VARIANT_PRESENTED_AT_MOTOR_SHOW
    source_node: CarModelVariantNode
    partner_node: MotorShowNode
    created_at: string
    updated_at: string
}
