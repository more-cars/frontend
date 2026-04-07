import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {RacingSeriesNode} from "./RacingSeriesNode"
import type {ImageNode} from "../../images/types/ImageNode"

export type RacingSeriesHasMainImageRelationship = {
    id: number
    name: DataRelationshipType.RACING_SERIES_HAS_MAIN_IMAGE
    source_node: RacingSeriesNode
    partner_node: ImageNode
    created_at: string
    updated_at: string
}
