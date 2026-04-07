import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {ModelCarBrandNode} from "./ModelCarBrandNode"
import type {VideoNode} from "../../videos/types/VideoNode"

export type ModelCarBrandHasVideoRelationship = {
    id: number
    name: DataRelationshipType.MODEL_CAR_BRAND_HAS_VIDEO
    source_node: ModelCarBrandNode
    partner_node: VideoNode
    created_at: string
    updated_at: string
}
