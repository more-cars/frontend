import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {SessionResultNode} from "./SessionResultNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {ImageNode} from "../../images/types/ImageNode"

export type SessionResultHasMainImageRelationship = {
    id: number
    name: DataRelationshipType.SESSION_RESULT_HAS_MAIN_IMAGE
    source_node: SessionResultNode
    source_node_type: DataNodeType.SESSION_RESULT
    partner_node: ImageNode
    partner_node_type: DataNodeType.IMAGE
    created_at: string
    updated_at: string
}
