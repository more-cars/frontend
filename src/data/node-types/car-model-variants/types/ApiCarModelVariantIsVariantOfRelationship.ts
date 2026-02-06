import type {ApiCarModelNode} from "../../car-models/types/ApiCarModelNode"

export type ApiCarModelVariantIsVariantOfRelationship = {
    data: {
        relationship_id: number
        relationship_name: 'is-variant-of'
        relationship_partner: {
            node_type: 'car model'
            data: ApiCarModelNode['data']
        }
        created_at: string
        updated_at: string
    }
}
