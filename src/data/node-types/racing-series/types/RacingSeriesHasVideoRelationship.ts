import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {RacingSeriesNode} from "./RacingSeriesNode"
import type {VideoNode} from "../../videos/types/VideoNode"

export type RacingSeriesHasVideoRelationship = {
    id: number
    name: DataRelationshipType.RACING_SERIES_HAS_VIDEO
    source_node: RacingSeriesNode
    partner_node: VideoNode
    created_at: string
    updated_at: string
}
