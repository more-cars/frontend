import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {MotorShowNode} from "./MotorShowNode"
import type {ImageNode} from "../../images/types/ImageNode"

export type MotorShowHasImageRelationship = {
    id: number
    name: DataRelationshipType.MOTOR_SHOW_HAS_IMAGE
    source_node: MotorShowNode
    partner_node: ImageNode
    created_at: string
    updated_at: string
}
