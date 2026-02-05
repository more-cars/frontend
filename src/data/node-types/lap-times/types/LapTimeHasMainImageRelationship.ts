import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {LapTimeNode} from "./LapTimeNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {ImageNode} from "../../images/types/ImageNode"

export type LapTimeHasMainImageRelationship = {
    id: number
    name: DataRelationshipType.LAP_TIME_HAS_MAIN_IMAGE
    source_node: LapTimeNode
    source_node_type: DataNodeType.LAP_TIME
    partner_node: ImageNode
    partner_node_type: DataNodeType.IMAGE
    created_at: string
    updated_at: string
}
