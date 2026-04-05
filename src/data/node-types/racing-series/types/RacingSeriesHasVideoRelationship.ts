import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {RacingSeriesNode} from "./RacingSeriesNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {VideoNode} from "../../videos/types/VideoNode"

export type RacingSeriesHasVideoRelationship = {
    id: number
    name: DataRelationshipType.RACING_SERIES_HAS_VIDEO
    source_node: RacingSeriesNode
    source_node_type: DataNodeType.RACING_SERIES
    partner_node: VideoNode
    partner_node_type: DataNodeType.VIDEO
    created_at: string
    updated_at: string
}
