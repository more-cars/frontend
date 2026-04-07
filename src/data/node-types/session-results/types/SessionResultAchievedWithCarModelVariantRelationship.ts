import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {SessionResultNode} from "./SessionResultNode"
import type {CarModelVariantNode} from "../../car-model-variants/types/CarModelVariantNode"

export type SessionResultAchievedWithCarModelVariantRelationship = {
    id: number
    name: DataRelationshipType.SESSION_RESULT_ACHIEVED_WITH_CAR_MODEL_VARIANT
    source_node: SessionResultNode
    partner_node: CarModelVariantNode
    created_at: string
    updated_at: string
}
