import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {RacingSessionNode} from "./RacingSessionNode"
import type {ImageNode} from "../../images/types/ImageNode"

export type RacingSessionHasImageRelationship = {
    id: number
    name: DataRelationshipType.RACING_SESSION_HAS_IMAGE
    source_node: RacingSessionNode
    partner_node: ImageNode
    created_at: string
    updated_at: string
}
