import {RacingSessionDataFacade} from "../../../data/RacingSessionDataFacade"
import {convertRacingEventNode} from "../racing-events/convertRacingEventNode"

export async function findConnectedRacingEvent(id: number) {
    const relation = await RacingSessionDataFacade.getConnectedRacingEventNode(id)

    if (!relation) {
        return null
    }

    return convertRacingEventNode(relation.partner_node)
}
