import type {ApiBrandNode} from "../../brands/types/ApiBrandNode"
import type {ApiCarModelNode} from "../../car-models/types/ApiCarModelNode"

export type ApiImageBelongsToNodeRelationship = {
    data: {
        relationship_id: number
        relationship_name: 'belongs-to-node'
        relationship_partner: {
            node_type: 'brand' | 'car model'
            data: ApiBrandNode['data'] | ApiCarModelNode['data']
        }
        created_at: string
        updated_at: string
    }
}
