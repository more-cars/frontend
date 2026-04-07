import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {CarModelNode} from "./CarModelNode"

export type CarModelHasSuccessorRelationship = {
    id: number
    name: DataRelationshipType.CAR_MODEL_HAS_SUCCESSOR
    source_node: CarModelNode
    partner_node: CarModelNode
    created_at: string
    updated_at: string
}
