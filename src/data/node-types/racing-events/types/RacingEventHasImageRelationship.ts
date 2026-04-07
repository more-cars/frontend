import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {RacingEventNode} from "./RacingEventNode"
import type {ImageNode} from "../../images/types/ImageNode"

export type RacingEventHasImageRelationship = {
    id: number
    name: DataRelationshipType.RACING_EVENT_HAS_IMAGE
    source_node: RacingEventNode
    partner_node: ImageNode
    created_at: string
    updated_at: string
}
