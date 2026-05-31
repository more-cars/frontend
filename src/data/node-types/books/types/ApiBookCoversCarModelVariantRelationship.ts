import type {ApiRelationshipType} from "../../../types/ApiRelationshipType"
import type {ApiNodeType} from "../../../types/ApiNodeType"
import type {ApiCarModelVariantNode} from "../../car-model-variants/types/ApiCarModelVariantNode"

export type ApiBookCoversCarModelVariantRelationship = {
    links: {
        self: string
    }
    data: {
        type: ApiNodeType.CAR_MODEL_VARIANT
        id: number
        attributes: Record<string, string | number | boolean | null>
        data: {
            relationship_id: number
            relationship_name: ApiRelationshipType.BOOK_COVERS_CAR_MODEL_VARIANT
            partner_node: {
                node_type: ApiNodeType.CAR_MODEL_VARIANT
                data: ApiCarModelVariantNode['attributes']
            }
            created_at: string
            updated_at: string
        }
    }[]
}
