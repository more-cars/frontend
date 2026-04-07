import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {CarModelVariantNode} from "./CarModelVariantNode"
import type {SessionResultNode} from "../../session-results/types/SessionResultNode"

export type CarModelVariantAchievedSessionResultRelationship = {
    id: number
    name: DataRelationshipType.CAR_MODEL_VARIANT_ACHIEVED_SESSION_RESULT
    source_node: CarModelVariantNode
    partner_node: SessionResultNode
    created_at: string
    updated_at: string
}
