import type {ApiImageNode} from "../../images/types/ApiImageNode"

export type ApiCarModelVariantHasPrimeImageRelationship = {
    data: {
        relationship_id: number
        relationship_name: 'has-prime-image'
        relationship_partner: {
            node_type: 'image'
            data: ApiImageNode['data']
        }
        created_at: string
        updated_at: string
    }
}
