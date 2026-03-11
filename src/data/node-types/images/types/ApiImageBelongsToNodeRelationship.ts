import type {ApiNodeType} from "../../../types/ApiNodeType"
import type {ApiBrandNode} from "../../brands/types/ApiBrandNode"
import type {ApiCarModelNode} from "../../car-models/types/ApiCarModelNode"
import type {ApiRelationshipType} from "../../../types/ApiRelationshipType"

export type ApiImageBelongsToNodeRelationship = {
    data: {
        relationship_id: number
        relationship_name: ApiRelationshipType.IMAGE_BELONGS_TO_NODE
        partner_node: {
            node_type: ApiNodeType.BRAND | ApiNodeType.CAR_MODEL
            data: ApiBrandNode['attributes'] | ApiCarModelNode['attributes']
        }
        created_at: string
        updated_at: string
    }
}
