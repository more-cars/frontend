import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {ProgrammeNode} from "./ProgrammeNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {ImageNode} from "../../images/types/ImageNode"

export type ProgrammeHasMainImageRelationship = {
    id: number
    name: DataRelationshipType.PROGRAMME_HAS_MAIN_IMAGE
    source_node: ProgrammeNode
    source_node_type: DataNodeType.PROGRAMME
    partner_node: ImageNode
    partner_node_type: DataNodeType.IMAGE
    created_at: string
    updated_at: string
}
