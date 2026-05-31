import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {BookNode} from "./BookNode"
import type {CarModelVariantNode} from "../../car-model-variants/types/CarModelVariantNode"

export type BookCoversCarModelVariantRelationship = {
    id: number
    name: DataRelationshipType.BOOK_COVERS_CAR_MODEL_VARIANT
    source_node: BookNode
    partner_node: CarModelVariantNode
    created_at: string
    updated_at: string
}
