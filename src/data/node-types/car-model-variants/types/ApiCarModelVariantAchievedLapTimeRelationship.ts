import type {ApiNodeType} from "../../../types/ApiNodeType"
import type {ApiLapTimeNode} from "../../lap-times/types/ApiLapTimeNode"
import type {ApiRelationshipType} from "../../../types/ApiRelationshipType"

export type ApiCarModelVariantAchievedLapTimeRelationship = {
    links: {
        self: string
    }
    data: {
        type: ApiNodeType.CAR_MODEL_VARIANT
        id: number
        attributes: Record<string, string | number | boolean | null>
        data: {
            relationship_id: number
            relationship_name: ApiRelationshipType.CAR_MODEL_VARIANT_ACHIEVED_LAP_TIME
            partner_node: {
                node_type: ApiNodeType.LAP_TIME
                data: ApiLapTimeNode['attributes']
            }
            created_at: string
            updated_at: string
        }
    }[]
}
