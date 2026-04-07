import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {RaceTrackNode} from "./RaceTrackNode"
import type {ImageNode} from "../../images/types/ImageNode"

export type RaceTrackHasImageRelationship = {
    id: number
    name: DataRelationshipType.RACE_TRACK_HAS_IMAGE
    source_node: RaceTrackNode
    partner_node: ImageNode
    created_at: string
    updated_at: string
}
