import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {BrandNode} from "./BrandNode"
import type {CarModelNode} from "../../car-models/types/CarModelNode"

export type BrandHasCarModelRelationship = {
    id: number
    name: DataRelationshipType.BRAND_HAS_CAR_MODEL
    source_node: BrandNode
    partner_node: CarModelNode
    created_at: string
    updated_at: string
}
