import type {ApiRelationshipType} from "../../../types/ApiRelationshipType"
import type {ApiNodeType} from "../../../types/ApiNodeType"
import type {ApiImageNode} from "./ApiImageNode"

export type ApiImageBelongsToNodeRelationship = {
    links: {
        self: string
    }
    data: {
        type: ApiNodeType.IMAGE
        id: number
        attributes: Record<string, string | number | boolean | null>
        data: {
            relationship_id: number
            relationship_name: ApiRelationshipType.IMAGE_BELONGS_TO_NODE
            start_node: {
                node_type: ApiNodeType.IMAGE
                data: ApiImageNode['attributes']
            }
            partner_node: {
                node_type: ApiNodeType
                data: {
                    [key: string]: string | number | boolean | null
                    created_at: string
                    updated_at: string
                }
            }
            created_at: string
            updated_at: string
        }
    }[]
}
