import type {ApiNodeType} from "../../../types/ApiNodeType"
import type {ApiCarModelNode} from "./ApiCarModelNode"
import type {ApiRelationshipType} from "../../../types/ApiRelationshipType"

export type ApiCarModelHasSuccessorRelationship = {
    links: {
        self: string
    }
    data: {
        type: ApiNodeType.CAR_MODEL
        id: number
        attributes: Record<string, string | number | boolean | null>
        data: {
            relationship_id: number
            relationship_name: ApiRelationshipType.CAR_MODEL_HAS_SUCCESSOR
            partner_node: {
                node_type: ApiNodeType.CAR_MODEL
                data: ApiCarModelNode['attributes']
            }
            created_at: string
            updated_at: string
        }
    }
}
