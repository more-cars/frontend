import type {ApiCarModelNode} from "../../car-models/types/ApiCarModelNode"

export type ApiCarModelVariantIsVariantOfRelationship = {
    data: {
        relationship_id: number
        relationship_name: 'is-variant-of'
        partner_node: {
            node_type: 'car model'
            data: ApiCarModelNode['attributes']
        }
        created_at: string
        updated_at: string
    }
}
