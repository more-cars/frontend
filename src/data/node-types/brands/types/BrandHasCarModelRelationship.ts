import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {BrandNode} from "./BrandNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {CarModelNode} from "../../car-models/types/CarModelNode"

export type BrandHasCarModelRelationship = {
    id: number
    name: DataRelationshipType.BRAND_HAS_CAR_MODEL
    source_node: BrandNode
    source_node_type: DataNodeType.BRAND
    partner_node: CarModelNode
    partner_node_type: DataNodeType.CAR_MODEL
    created_at: string
    updated_at: string
}
