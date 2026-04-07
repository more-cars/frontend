import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {LapTimeNode} from "./LapTimeNode"
import type {CarModelVariantNode} from "../../car-model-variants/types/CarModelVariantNode"

export type LapTimeAchievedWithCarModelVariantRelationship = {
    id: number
    name: DataRelationshipType.LAP_TIME_ACHIEVED_WITH_CAR_MODEL_VARIANT
    source_node: LapTimeNode
    partner_node: CarModelVariantNode
    created_at: string
    updated_at: string
}
