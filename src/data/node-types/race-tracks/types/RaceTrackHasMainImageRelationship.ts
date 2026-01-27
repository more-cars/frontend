import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {RaceTrackNode} from "./RaceTrackNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {ImageNode} from "../../images/types/ImageNode"

export type RaceTrackHasMainImageRelationship = {
    id: number
    name: DataRelationshipType.RACE_TRACK_HAS_MAIN_IMAGE
    source_node: RaceTrackNode
    source_node_type: DataNodeType.RACE_TRACK
    partner_node: ImageNode
    partner_node_type: DataNodeType.IMAGE
    created_at: string
    updated_at: string
}
