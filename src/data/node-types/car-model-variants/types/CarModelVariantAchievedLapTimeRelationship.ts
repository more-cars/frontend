import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {CarModelVariantNode} from "./CarModelVariantNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {LapTimeNode} from "../../lap-times/types/LapTimeNode"

export type CarModelVariantAchievedLapTimeRelationship = {
    id: number
    name: DataRelationshipType.CAR_MODEL_VARIANT_ACHIEVED_LAP_TIME
    source_node: CarModelVariantNode
    source_node_type: DataNodeType.CAR_MODEL_VARIANT
    partner_node: LapTimeNode
    partner_node_type: DataNodeType.LAP_TIME
    created_at: string
    updated_at: string
}
