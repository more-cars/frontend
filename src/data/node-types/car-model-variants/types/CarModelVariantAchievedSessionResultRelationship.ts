import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {CarModelVariantNode} from "./CarModelVariantNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {SessionResultNode} from "../../session-results/types/SessionResultNode"

export type CarModelVariantAchievedSessionResultRelationship = {
    id: number
    name: DataRelationshipType.CAR_MODEL_VARIANT_ACHIEVED_SESSION_RESULT
    source_node: CarModelVariantNode
    source_node_type: DataNodeType.CAR_MODEL_VARIANT
    partner_node: SessionResultNode
    partner_node_type: DataNodeType.SESSION_RESULT
    created_at: string
    updated_at: string
}
