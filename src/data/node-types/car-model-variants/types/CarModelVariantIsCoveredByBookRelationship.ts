import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {CarModelVariantNode} from "./CarModelVariantNode"
import type {BookNode} from "../../books/types/BookNode"

export type CarModelVariantIsCoveredByBookRelationship = {
    id: number
    name: DataRelationshipType.CAR_MODEL_VARIANT_IS_COVERED_BY_BOOK
    source_node: CarModelVariantNode
    partner_node: BookNode
    created_at: string
    updated_at: string
}
