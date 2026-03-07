import type {ApiBrandNode} from "../../brands/types/ApiBrandNode"
import type {ApiCarModelNode} from "../../car-models/types/ApiCarModelNode"

export type ApiImageBelongsToNodeRelationship = {
    data: {
        relationship_id: number
        relationship_name: 'belongs-to-node'
        partner_node: {
            node_type: 'brand' | 'car model'
            data: ApiBrandNode['attributes'] | ApiCarModelNode['attributes']
        }
        created_at: string
        updated_at: string
    }
}
