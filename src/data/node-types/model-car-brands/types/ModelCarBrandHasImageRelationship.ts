import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {ModelCarBrandNode} from "./ModelCarBrandNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {ImageNode} from "../../images/types/ImageNode"

export type ModelCarBrandHasImageRelationship = {
    id: number
    name: DataRelationshipType.MODEL_CAR_BRAND_HAS_IMAGE
    source_node: ModelCarBrandNode
    source_node_type: DataNodeType.MODEL_CAR_BRAND
    partner_node: ImageNode
    partner_node_type: DataNodeType.IMAGE
    created_at: string
    updated_at: string
}
