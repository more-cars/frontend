import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {RacingSessionNode} from "./RacingSessionNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {ImageNode} from "../../images/types/ImageNode"

export type RacingSessionHasImageRelationship = {
    id: number
    name: DataRelationshipType.RACING_SESSION_HAS_IMAGE
    source_node: RacingSessionNode
    source_node_type: DataNodeType.RACING_SESSION
    partner_node: ImageNode
    partner_node_type: DataNodeType.IMAGE
    created_at: string
    updated_at: string
}
