import type {ApiNodeType} from "../../../types/ApiNodeType"
import type {ApiCarModelNode} from "./ApiCarModelNode"
import type {ApiRelationshipType} from "../../../types/ApiRelationshipType"

export type ApiCarModelIsSuccessorOfRelationship = {
    data: {
        relationship_id: number
        relationship_name: ApiRelationshipType.CAR_MODEL_IS_SUCCESSOR_OF
        partner_node: {
            node_type: ApiNodeType.CAR_MODEL
            data: ApiCarModelNode['attributes']
        }
        created_at: string
        updated_at: string
    }
}
