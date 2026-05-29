import type {ApiNodeType} from "../../../types/ApiNodeType"
import type {ApiImageNode} from "../../images/types/ApiImageNode"
import type {ApiRelationshipType} from "../../../types/ApiRelationshipType"

export type ApiMagazineIssueHasPrimeImageRelationship = {
    links: {
        self: string
    }
    data: {
        type: ApiNodeType.MAGAZINE_ISSUE
        id: number
        attributes: Record<string, string | number | boolean | null>
        data: {
            relationship_id: number
            relationship_name: ApiRelationshipType.MAGAZINE_ISSUE_HAS_MAIN_IMAGE
            partner_node: {
                node_type: ApiNodeType.IMAGE
                data: ApiImageNode['attributes']
            }
            created_at: string
            updated_at: string
        }
    }
}
