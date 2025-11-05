import type {BrandNode} from "../../brands/types/BrandNode"
import type {CarModelNode} from "../../car-models/types/CarModelNode"
import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {ImageNode} from "./ImageNode"

export type ImageBelongsToNodeRelationship = {
    id: number
    name: DataRelationshipType.IMAGE_BELONGS_TO_NODE
    source_node: ImageNode
    source_node_type: DataNodeType.IMAGE
    partner_node: BrandNode | CarModelNode
    partner_node_type: DataNodeType
    created_at: string
    updated_at: string
}
