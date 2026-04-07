import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {CarModelVariantNode} from "./CarModelVariantNode"
import type {ImageNode} from "../../images/types/ImageNode"

export type CarModelVariantHasMainImageRelationship = {
    id: number
    name: DataRelationshipType.CAR_MODEL_VARIANT_HAS_MAIN_IMAGE
    source_node: CarModelVariantNode
    partner_node: ImageNode
    created_at: string
    updated_at: string
}
