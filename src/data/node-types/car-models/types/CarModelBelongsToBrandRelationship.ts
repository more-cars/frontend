import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {CarModelNode} from "./CarModelNode"
import type {BrandNode} from "../../brands/types/BrandNode"

export type CarModelBelongsToBrandRelationship = {
    id: number
    name: DataRelationshipType.CAR_MODEL_BELONGS_TO_BRAND
    source_node: CarModelNode
    partner_node: BrandNode
    created_at: string
    updated_at: string
}
