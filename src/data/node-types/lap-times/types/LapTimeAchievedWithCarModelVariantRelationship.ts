import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {LapTimeNode} from "./LapTimeNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {CarModelVariantNode} from "../../car-model-variants/types/CarModelVariantNode"

export type LapTimeAchievedWithCarModelVariantRelationship = {
    id: number
    name: DataRelationshipType.LAP_TIME_ACHIEVED_WITH_CAR_MODEL_VARIANT
    source_node: LapTimeNode
    source_node_type: DataNodeType.LAP_TIME
    partner_node: CarModelVariantNode
    partner_node_type: DataNodeType.CAR_MODEL_VARIANT
    created_at: string
    updated_at: string
}
