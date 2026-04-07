import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {ModelCarBrandNode} from "./ModelCarBrandNode"
import type {ModelCarNode} from "../../model-cars/types/ModelCarNode"

export type ModelCarBrandCreatedModelCarRelationship = {
    id: number
    name: DataRelationshipType.MODEL_CAR_BRAND_CREATED_MODEL_CAR
    source_node: ModelCarBrandNode
    partner_node: ModelCarNode
    created_at: string
    updated_at: string
}
