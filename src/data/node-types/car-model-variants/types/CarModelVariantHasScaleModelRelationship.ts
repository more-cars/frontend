import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {CarModelVariantNode} from "./CarModelVariantNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {ModelCarNode} from "../../model-cars/types/ModelCarNode"

export type CarModelVariantHasScaleModelRelationship = {
    id: number
    name: DataRelationshipType.CAR_MODEL_VARIANT_HAS_SCALE_MODEL
    source_node: CarModelVariantNode
    source_node_type: DataNodeType.CAR_MODEL_VARIANT
    partner_node: ModelCarNode
    partner_node_type: DataNodeType.MODEL_CAR
    created_at: string
    updated_at: string
}
