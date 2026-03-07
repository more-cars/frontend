import type {ApiCarModelVariantNode} from "../../car-model-variants/types/ApiCarModelVariantNode"

export type ApiCarModelHasVariantRelationship = {
    data: {
        relationship_id: number
        relationship_name: 'has-variant'
        partner_node: {
            node_type: 'car model variant'
            data: ApiCarModelVariantNode['attributes']
        }
        created_at: string
        updated_at: string
    }
}
