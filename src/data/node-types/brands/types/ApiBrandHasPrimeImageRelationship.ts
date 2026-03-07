import type {ApiImageNode} from "../../images/types/ApiImageNode"

export type ApiBrandHasPrimeImageRelationship = {
    data: {
        relationship_id: number
        relationship_name: 'has-prime-image'
        partner_node: {
            node_type: 'images'
            data: ApiImageNode['attributes']
        }
        created_at: string
        updated_at: string
    }
}
