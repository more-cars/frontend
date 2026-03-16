import type {ApiRelationshipType} from "../../../types/ApiRelationshipType"
import type {ApiNodeType} from "../../../types/ApiNodeType"
import type {ApiImageNode} from "../../images/types/ApiImageNode"

export type ApiRatingHasPrimeImageRelationship = {
    data: {
        relationship_id: number
        relationship_name: ApiRelationshipType.RATING_HAS_MAIN_IMAGE
        partner_node: {
            node_type: ApiNodeType.IMAGE
            data: ApiImageNode['attributes']
        }
        created_at: string
        updated_at: string
    }
}
