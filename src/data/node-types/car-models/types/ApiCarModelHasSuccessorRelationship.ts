import {ApiCarModelNode} from "./ApiCarModelNode"

export type ApiCarModelHasSuccessorRelationship = {
    data: {
        relationship_id: number
        relationship_name: 'has-successor'
        partner_node: {
            node_type: 'car-model'
            data: ApiCarModelNode['attributes']
        }
        created_at: string
        updated_at: string
    }
}
