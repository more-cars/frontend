import {ApiCarModelNode} from "./ApiCarModelNode"

export type ApiCarModelIsSuccessorOfRelationship = {
    data: {
        relationship_id: number
        relationship_name: 'is-successor-of'
        relationship_partner: {
            node_type: 'car-model'
            data: ApiCarModelNode['data']
        }
        created_at: string
        updated_at: string
    }
}
