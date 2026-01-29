import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {RacingSeriesNode} from "./RacingSeriesNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {ImageNode} from "../../images/types/ImageNode"

export type RacingSeriesHasImageRelationship = {
    id: number
    name: DataRelationshipType.RACING_SERIES_HAS_IMAGE
    source_node: RacingSeriesNode
    source_node_type: DataNodeType.RACING_SERIES
    partner_node: ImageNode
    partner_node_type: DataNodeType.IMAGE
    created_at: string
    updated_at: string
}
