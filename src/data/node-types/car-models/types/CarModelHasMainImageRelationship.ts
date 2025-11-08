import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {CarModelNode} from "./CarModelNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {ImageNode} from "../../images/types/ImageNode"

export type CarModelHasMainImageRelationship = {
    id: number
    name: DataRelationshipType.CAR_MODEL_HAS_MAIN_IMAGE
    source_node: CarModelNode
    source_node_type: DataNodeType.CAR_MODEL
    partner_node: ImageNode
    partner_node_type: DataNodeType.IMAGE
    created_at: string
    updated_at: string
}
