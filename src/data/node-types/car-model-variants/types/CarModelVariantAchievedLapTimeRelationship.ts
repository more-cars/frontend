import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {CarModelVariantNode} from "./CarModelVariantNode"
import type {LapTimeNode} from "../../lap-times/types/LapTimeNode"

export type CarModelVariantAchievedLapTimeRelationship = {
    id: number
    name: DataRelationshipType.CAR_MODEL_VARIANT_ACHIEVED_LAP_TIME
    source_node: CarModelVariantNode
    partner_node: LapTimeNode
    created_at: string
    updated_at: string
}
