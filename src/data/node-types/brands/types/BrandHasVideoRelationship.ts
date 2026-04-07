import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {BrandNode} from "./BrandNode"
import type {VideoNode} from "../../videos/types/VideoNode"

export type BrandHasVideoRelationship = {
    id: number
    name: DataRelationshipType.BRAND_HAS_VIDEO
    source_node: BrandNode
    partner_node: VideoNode
    created_at: string
    updated_at: string
}
