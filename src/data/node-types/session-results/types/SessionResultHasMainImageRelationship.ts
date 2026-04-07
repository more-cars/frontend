import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {SessionResultNode} from "./SessionResultNode"
import type {ImageNode} from "../../images/types/ImageNode"

export type SessionResultHasMainImageRelationship = {
    id: number
    name: DataRelationshipType.SESSION_RESULT_HAS_MAIN_IMAGE
    source_node: SessionResultNode
    partner_node: ImageNode
    created_at: string
    updated_at: string
}
