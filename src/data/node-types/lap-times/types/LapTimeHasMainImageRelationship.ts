import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {LapTimeNode} from "./LapTimeNode"
import type {ImageNode} from "../../images/types/ImageNode"

export type LapTimeHasMainImageRelationship = {
    id: number
    name: DataRelationshipType.LAP_TIME_HAS_MAIN_IMAGE
    source_node: LapTimeNode
    partner_node: ImageNode
    created_at: string
    updated_at: string
}
