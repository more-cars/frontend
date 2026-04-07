import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {ModelCarNode} from "./ModelCarNode"
import type {VideoNode} from "../../videos/types/VideoNode"

export type ModelCarHasVideoRelationship = {
    id: number
    name: DataRelationshipType.MODEL_CAR_HAS_VIDEO
    source_node: ModelCarNode
    partner_node: VideoNode
    created_at: string
    updated_at: string
}
