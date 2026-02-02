import {RacingEventDataFacade} from "../../../data/RacingEventDataFacade"
import {convertRacingEventNode} from "./convertRacingEventNode"

export async function findConnectedSuccessor(id: number) {
    const relation = await RacingEventDataFacade.getConnectedSuccessorNode(id)

    if (!relation) {
        return null
    }

    return convertRacingEventNode(relation.partner_node)
}
