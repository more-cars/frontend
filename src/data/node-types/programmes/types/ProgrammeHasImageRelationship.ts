import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {ProgrammeNode} from "./ProgrammeNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {ImageNode} from "../../images/types/ImageNode"

export type ProgrammeHasImageRelationship = {
    id: number
    name: DataRelationshipType.PROGRAMME_HAS_IMAGE
    source_node: ProgrammeNode
    source_node_type: DataNodeType.PROGRAMME
    partner_node: ImageNode
    partner_node_type: DataNodeType.IMAGE
    created_at: string
    updated_at: string
}
