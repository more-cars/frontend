import type {ApiRelationshipType} from "../../../types/ApiRelationshipType"
import type {ApiNodeType} from "../../../types/ApiNodeType"
import type {ApiImageNode} from "../../images/types/ApiImageNode"

export type ApiBookHasImageRelationship = {
    links: {
        self: string
    }
    data: {
        type: ApiNodeType.IMAGE
        id: number
        attributes: Record<string, string | number | boolean | null>
        data: {
            relationship_id: number
            relationship_name: ApiRelationshipType.BOOK_HAS_IMAGE
            partner_node: {
                node_type: ApiNodeType.IMAGE
                data: ApiImageNode['attributes']
            }
            created_at: string
            updated_at: string
        }
    }[]
}
