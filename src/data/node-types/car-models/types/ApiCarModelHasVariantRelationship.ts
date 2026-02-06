import type {ApiCarModelVariantNode} from "../../car-model-variants/types/ApiCarModelVariantNode"

export type ApiCarModelHasVariantRelationship = {
    data: {
        relationship_id: number
        relationship_name: 'has-variant'
        relationship_partner: {
            node_type: 'car model variant'
            data: ApiCarModelVariantNode['data']
        }
        created_at: string
        updated_at: string
    }
}
