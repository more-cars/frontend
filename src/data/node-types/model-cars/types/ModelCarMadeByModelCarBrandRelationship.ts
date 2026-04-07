import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {ModelCarNode} from "./ModelCarNode"
import type {ModelCarBrandNode} from "../../model-car-brands/types/ModelCarBrandNode"

export type ModelCarMadeByModelCarBrandRelationship = {
    id: number
    name: DataRelationshipType.MODEL_CAR_MADE_BY_MODEL_CAR_BRAND
    source_node: ModelCarNode
    partner_node: ModelCarBrandNode
    created_at: string
    updated_at: string
}
