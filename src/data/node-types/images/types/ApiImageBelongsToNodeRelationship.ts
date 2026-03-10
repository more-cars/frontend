import type {ApiNodeType} from "../../../types/ApiNodeType"
import type {ApiBrandNode} from "../../brands/types/ApiBrandNode"
import type {ApiCarModelNode} from "../../car-models/types/ApiCarModelNode"

export type ApiImageBelongsToNodeRelationship = {
    data: {
        relationship_id: number
        relationship_name: 'belongs-to-node'
        partner_node: {
            node_type: ApiNodeType.BRAND | ApiNodeType.CAR_MODEL
            data: ApiBrandNode['attributes'] | ApiCarModelNode['attributes']
        }
        created_at: string
        updated_at: string
    }
}
