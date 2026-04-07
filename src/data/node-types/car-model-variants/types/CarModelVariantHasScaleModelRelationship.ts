import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {CarModelVariantNode} from "./CarModelVariantNode"
import type {ModelCarNode} from "../../model-cars/types/ModelCarNode"

export type CarModelVariantHasScaleModelRelationship = {
    id: number
    name: DataRelationshipType.CAR_MODEL_VARIANT_HAS_SCALE_MODEL
    source_node: CarModelVariantNode
    partner_node: ModelCarNode
    created_at: string
    updated_at: string
}
