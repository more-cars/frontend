import type {ApiBrandNode} from "../../brands/types/ApiBrandNode"

export type ApiCompanyHasBrandRelationship = {
    data: {
        relationship_id: number
        relationship_name: 'has-brand'
        relationship_partner: {
            node_type: 'brand'
            data: ApiBrandNode['data']
        }
        created_at: string
        updated_at: string
    }
}
