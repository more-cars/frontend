import {ApiCarModelNode} from "./ApiCarModelNode"

export type ApiCarModelHasSuccessorRelationship = {
    data: {
        relationship_id: number
        relationship_name: 'has-successor'
        relationship_partner: {
            node_type: 'car-model'
            data: ApiCarModelNode['data']
        }
        created_at: string
        updated_at: string
    }
}
