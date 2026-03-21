import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {ModelCarNode} from "./ModelCarNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {ModelCarBrandNode} from "../../model-car-brands/types/ModelCarBrandNode"

export type ModelCarMadeByModelCarBrandRelationship = {
    id: number
    name: DataRelationshipType.MODEL_CAR_MADE_BY_MODEL_CAR_BRAND
    source_node: ModelCarNode
    source_node_type: DataNodeType.MODEL_CAR
    partner_node: ModelCarBrandNode
    partner_node_type: DataNodeType.MODEL_CAR_BRAND
    created_at: string
    updated_at: string
}
