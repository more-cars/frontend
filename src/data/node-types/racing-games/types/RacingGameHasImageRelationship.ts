import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {RacingGameNode} from "./RacingGameNode"
import type {DataNodeType} from "../../../types/DataNodeType"
import type {ImageNode} from "../../images/types/ImageNode"

export type RacingGameHasImageRelationship = {
    id: number
    name: DataRelationshipType.RACING_GAME_HAS_IMAGE
    source_node: RacingGameNode
    source_node_type: DataNodeType.RACING_GAME
    partner_node: ImageNode
    partner_node_type: DataNodeType.IMAGE
    created_at: string
    updated_at: string
}
