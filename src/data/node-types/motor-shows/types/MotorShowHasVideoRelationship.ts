import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {MotorShowNode} from "./MotorShowNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {VideoNode} from "../../videos/types/VideoNode"

export type MotorShowHasVideoRelationship = {
    id: number
    name: DataRelationshipType.MOTOR_SHOW_HAS_VIDEO
    source_node: MotorShowNode
    source_node_type: DataNodeType.MOTOR_SHOW
    partner_node: VideoNode
    partner_node_type: DataNodeType.VIDEO
    created_at: string
    updated_at: string
}
