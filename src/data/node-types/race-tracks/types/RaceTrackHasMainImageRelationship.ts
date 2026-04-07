import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {RaceTrackNode} from "./RaceTrackNode"
import type {ImageNode} from "../../images/types/ImageNode"

export type RaceTrackHasMainImageRelationship = {
    id: number
    name: DataRelationshipType.RACE_TRACK_HAS_MAIN_IMAGE
    source_node: RaceTrackNode
    partner_node: ImageNode
    created_at: string
    updated_at: string
}
