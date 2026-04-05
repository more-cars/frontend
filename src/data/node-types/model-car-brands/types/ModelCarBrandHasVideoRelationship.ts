import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {ModelCarBrandNode} from "./ModelCarBrandNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {VideoNode} from "../../videos/types/VideoNode"

export type ModelCarBrandHasVideoRelationship = {
    id: number
    name: DataRelationshipType.MODEL_CAR_BRAND_HAS_VIDEO
    source_node: ModelCarBrandNode
    source_node_type: DataNodeType.MODEL_CAR_BRAND
    partner_node: VideoNode
    partner_node_type: DataNodeType.VIDEO
    created_at: string
    updated_at: string
}
