import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {TrackLayoutNode} from "./TrackLayoutNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {ImageNode} from "../../images/types/ImageNode"

export type TrackLayoutHasImageRelationship = {
    id: number
    name: DataRelationshipType.TRACK_LAYOUT_HAS_IMAGE
    source_node: TrackLayoutNode
    source_node_type: DataNodeType.TRACK_LAYOUT
    partner_node: ImageNode
    partner_node_type: DataNodeType.IMAGE
    created_at: string
    updated_at: string
}
