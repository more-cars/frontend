import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {ProgrammeNode} from "./ProgrammeNode"
import type {ImageNode} from "../../images/types/ImageNode"

export type ProgrammeHasImageRelationship = {
    id: number
    name: DataRelationshipType.PROGRAMME_HAS_IMAGE
    source_node: ProgrammeNode
    partner_node: ImageNode
    created_at: string
    updated_at: string
}
