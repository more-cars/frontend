import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {RacingEventNode} from "./RacingEventNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {ImageNode} from "../../images/types/ImageNode"

export type RacingEventHasImageRelationship = {
    id: number
    name: DataRelationshipType.RACING_EVENT_HAS_IMAGE
    source_node: RacingEventNode
    source_node_type: DataNodeType.RACING_EVENT
    partner_node: ImageNode
    partner_node_type: DataNodeType.IMAGE
    created_at: string
    updated_at: string
}
