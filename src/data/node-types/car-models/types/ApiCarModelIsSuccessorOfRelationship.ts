import type {ApiNodeType} from "../../../types/ApiNodeType"
import type {ApiCarModelNode} from "./ApiCarModelNode"

export type ApiCarModelIsSuccessorOfRelationship = {
    data: {
        relationship_id: number
        relationship_name: 'is-successor-of'
        partner_node: {
            node_type: ApiNodeType.CAR_MODEL
            data: ApiCarModelNode['attributes']
        }
        created_at: string
        updated_at: string
    }
}
