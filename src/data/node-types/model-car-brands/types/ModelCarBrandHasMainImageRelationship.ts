import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {ModelCarBrandNode} from "./ModelCarBrandNode"
import type {ImageNode} from "../../images/types/ImageNode"

export type ModelCarBrandHasMainImageRelationship = {
    id: number
    name: DataRelationshipType.MODEL_CAR_BRAND_HAS_MAIN_IMAGE
    source_node: ModelCarBrandNode
    partner_node: ImageNode
    created_at: string
    updated_at: string
}
