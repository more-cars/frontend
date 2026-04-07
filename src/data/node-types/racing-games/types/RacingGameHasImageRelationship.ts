import type {DataRelationshipType} from "../../../types/DataRelationshipType"
import type {RacingGameNode} from "./RacingGameNode"
import type {ImageNode} from "../../images/types/ImageNode"

export type RacingGameHasImageRelationship = {
    id: number
    name: DataRelationshipType.RACING_GAME_HAS_IMAGE
    source_node: RacingGameNode
    partner_node: ImageNode
    created_at: string
    updated_at: string
}
