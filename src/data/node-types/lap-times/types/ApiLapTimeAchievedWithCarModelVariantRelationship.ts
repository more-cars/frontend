import type {ApiNodeType} from "../../../types/ApiNodeType"
import type {ApiCarModelVariantNode} from "../../car-model-variants/types/ApiCarModelVariantNode"
import type {ApiRelationshipType} from "../../../types/ApiRelationshipType"

export type ApiLapTimeAchievedWithCarModelVariantRelationship = {
    links: {
        self: string
    }
    data: {
        type: ApiNodeType.LAP_TIME
        id: number
        attributes: Record<string, string | number | boolean | null>
        data: {
            relationship_id: number
            relationship_name: ApiRelationshipType.LAP_TIME_ACHIEVED_WITH_CAR_MODEL_VARIANT
            partner_node: {
                node_type: ApiNodeType.CAR_MODEL_VARIANT
                data: ApiCarModelVariantNode['attributes']
            }
            created_at: string
            updated_at: string
        }
    }
}
