import type {ApiCarModelNode} from "../../car-models/types/ApiCarModelNode"

export type ApiBrandHasCarModelRelationship = {
    data: {
        relationship_id: number
        relationship_name: 'has-car-model'
        partner_node: {
            node_type: 'car-models'
            data: ApiCarModelNode['attributes']
        }
        created_at: string
        updated_at: string
    }
}
