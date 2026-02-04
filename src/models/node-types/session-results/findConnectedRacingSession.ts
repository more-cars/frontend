import {SessionResultDataFacade} from "../../../data/SessionResultDataFacade"
import {convertRacingSessionNode} from "../racing-sessions/convertRacingSessionNode"

export async function findConnectedRacingSession(id: number) {
    const relation = await SessionResultDataFacade.getConnectedRacingSessionNode(id)

    if (!relation) {
        return null
    }

    return convertRacingSessionNode(relation.partner_node)
}
