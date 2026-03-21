import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {ModelCarNode} from "./ModelCarNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {ImageNode} from "../../images/types/ImageNode"

export type ModelCarHasMainImageRelationship = {
    id: number
    name: DataRelationshipType.MODEL_CAR_HAS_MAIN_IMAGE
    source_node: ModelCarNode
    source_node_type: DataNodeType.MODEL_CAR
    partner_node: ImageNode
    partner_node_type: DataNodeType.IMAGE
    created_at: string
    updated_at: string
}
