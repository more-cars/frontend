import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {BrandNode} from "./BrandNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {VideoNode} from "../../videos/types/VideoNode"

export type BrandHasVideoRelationship = {
    id: number
    name: DataRelationshipType.BRAND_HAS_VIDEO
    source_node: BrandNode
    source_node_type: DataNodeType.BRAND
    partner_node: VideoNode
    partner_node_type: DataNodeType.VIDEO
    created_at: string
    updated_at: string
}
