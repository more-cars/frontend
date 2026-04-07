import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {CarModelNode} from "./CarModelNode"

export type CarModelIsSuccessorOfRelationship = {
    id: number
    name: DataRelationshipType.CAR_MODEL_IS_SUCCESSOR_OF
    source_node: CarModelNode
    partner_node: CarModelNode
    created_at: string
    updated_at: string
}
