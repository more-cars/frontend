import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {MotorShowNode} from "./MotorShowNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {ImageNode} from "../../images/types/ImageNode"

export type MotorShowHasMainImageRelationship = {
    id: number
    name: DataRelationshipType.MOTOR_SHOW_HAS_MAIN_IMAGE
    source_node: MotorShowNode
    source_node_type: DataNodeType.MOTOR_SHOW
    partner_node: ImageNode
    partner_node_type: DataNodeType.IMAGE
    created_at: string
    updated_at: string
}
