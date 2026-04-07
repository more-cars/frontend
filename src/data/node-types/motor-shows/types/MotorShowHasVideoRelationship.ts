import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {MotorShowNode} from "./MotorShowNode"
import type {VideoNode} from "../../videos/types/VideoNode"

export type MotorShowHasVideoRelationship = {
    id: number
    name: DataRelationshipType.MOTOR_SHOW_HAS_VIDEO
    source_node: MotorShowNode
    partner_node: VideoNode
    created_at: string
    updated_at: string
}
