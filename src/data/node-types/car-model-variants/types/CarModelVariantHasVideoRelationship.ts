import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {CarModelVariantNode} from "./CarModelVariantNode"
import type {VideoNode} from "../../videos/types/VideoNode"

export type CarModelVariantHasVideoRelationship = {
    id: number
    name: DataRelationshipType.CAR_MODEL_VARIANT_HAS_VIDEO
    source_node: CarModelVariantNode
    partner_node: VideoNode
    created_at: string
    updated_at: string
}
