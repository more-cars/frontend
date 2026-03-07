import type {ApiBrandNode} from "../../brands/types/ApiBrandNode"

export type ApiCarModelBelongsToBrandRelationship = {
    data: {
        relationship_id: number
        relationship_name: 'belongs-to-brand'
        partner_node: {
            node_type: 'brand'
            data: ApiBrandNode['attributes']
        }
        created_at: string
        updated_at: string
    }
}
