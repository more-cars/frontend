import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {ModelCarBrandNode} from "./ModelCarBrandNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {ModelCarNode} from "../../model-cars/types/ModelCarNode"

export type ModelCarBrandCreatedModelCarRelationship = {
    id: number
    name: DataRelationshipType.MODEL_CAR_BRAND_CREATED_MODEL_CAR
    source_node: ModelCarBrandNode
    source_node_type: DataNodeType.MODEL_CAR_BRAND
    partner_node: ModelCarNode
    partner_node_type: DataNodeType.MODEL_CAR
    created_at: string
    updated_at: string
}
