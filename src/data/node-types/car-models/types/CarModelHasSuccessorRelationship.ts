import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {CarModelNode} from "./CarModelNode"
import type {DataNodeType} from "../../../types/DataNodeType"

export type CarModelHasSuccessorRelationship = {
    id: number
    name: DataRelationshipType.CAR_MODEL_HAS_SUCCESSOR
    source_node: CarModelNode
    source_node_type: DataNodeType.CAR_MODEL
    partner_node: CarModelNode
    partner_node_type: DataNodeType.CAR_MODEL
    created_at: string
    updated_at: string
}
