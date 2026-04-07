import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {ModelCarNode} from "./ModelCarNode"
import type {ImageNode} from "../../images/types/ImageNode"

export type ModelCarHasMainImageRelationship = {
    id: number
    name: DataRelationshipType.MODEL_CAR_HAS_MAIN_IMAGE
    source_node: ModelCarNode
    partner_node: ImageNode
    created_at: string
    updated_at: string
}
