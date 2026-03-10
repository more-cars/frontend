import type {ApiNodeType} from "../../../types/ApiNodeType"
import type {ApiCarModelNode} from "./ApiCarModelNode"

export type ApiCarModelHasSuccessorRelationship = {
    data: {
        relationship_id: number
        relationship_name: 'has-successor'
        partner_node: {
            node_type: ApiNodeType.CAR_MODEL
            data: ApiCarModelNode['attributes']
        }
        created_at: string
        updated_at: string
    }
}
