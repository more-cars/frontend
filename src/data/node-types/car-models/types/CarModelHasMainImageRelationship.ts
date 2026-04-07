import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {CarModelNode} from "./CarModelNode"
import type {ImageNode} from "../../images/types/ImageNode"

export type CarModelHasMainImageRelationship = {
    id: number
    name: DataRelationshipType.CAR_MODEL_HAS_MAIN_IMAGE
    source_node: CarModelNode
    partner_node: ImageNode
    created_at: string
    updated_at: string
}
