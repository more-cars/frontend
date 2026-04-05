import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {CarModelNode} from "./CarModelNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {VideoNode} from "../../videos/types/VideoNode"

export type CarModelHasVideoRelationship = {
    id: number
    name: DataRelationshipType.CAR_MODEL_HAS_VIDEO
    source_node: CarModelNode
    source_node_type: DataNodeType.CAR_MODEL
    partner_node: VideoNode
    partner_node_type: DataNodeType.VIDEO
    created_at: string
    updated_at: string
}
