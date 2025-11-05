import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {CarModelNode} from "./CarModelNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {BrandNode} from "../../brands/types/BrandNode"

export type CarModelBelongsToBrandRelationship = {
    id: number
    name: DataRelationshipType.CAR_MODEL_BELONGS_TO_BRAND
    source_node: CarModelNode
    source_node_type: DataNodeType.CAR_MODEL
    partner_node: BrandNode
    partner_node_type: DataNodeType.BRAND
    created_at: string
    updated_at: string
}
