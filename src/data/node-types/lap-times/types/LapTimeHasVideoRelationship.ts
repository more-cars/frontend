import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {LapTimeNode} from "./LapTimeNode"
import type {VideoNode} from "../../videos/types/VideoNode"

export type LapTimeHasVideoRelationship = {
    id: number
    name: DataRelationshipType.LAP_TIME_HAS_VIDEO
    source_node: LapTimeNode
    partner_node: VideoNode
    created_at: string
    updated_at: string
}
