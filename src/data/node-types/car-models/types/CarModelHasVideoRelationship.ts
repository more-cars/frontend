import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {CarModelNode} from "./CarModelNode"
import type {VideoNode} from "../../videos/types/VideoNode"

export type CarModelHasVideoRelationship = {
    id: number
    name: DataRelationshipType.CAR_MODEL_HAS_VIDEO
    source_node: CarModelNode
    partner_node: VideoNode
    created_at: string
    updated_at: string
}
