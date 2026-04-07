import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {TrackLayoutNode} from "./TrackLayoutNode"
import type {ImageNode} from "../../images/types/ImageNode"

export type TrackLayoutHasImageRelationship = {
    id: number
    name: DataRelationshipType.TRACK_LAYOUT_HAS_IMAGE
    source_node: TrackLayoutNode
    partner_node: ImageNode
    created_at: string
    updated_at: string
}
