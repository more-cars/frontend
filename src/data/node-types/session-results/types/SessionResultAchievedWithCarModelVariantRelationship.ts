import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {SessionResultNode} from "./SessionResultNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {CarModelVariantNode} from "../../car-model-variants/types/CarModelVariantNode"

export type SessionResultAchievedWithCarModelVariantRelationship = {
    id: number
    name: DataRelationshipType.SESSION_RESULT_ACHIEVED_WITH_CAR_MODEL_VARIANT
    source_node: SessionResultNode
    source_node_type: DataNodeType.SESSION_RESULT
    partner_node: CarModelVariantNode
    partner_node_type: DataNodeType.CAR_MODEL_VARIANT
    created_at: string
    updated_at: string
}
