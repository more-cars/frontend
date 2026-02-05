import {LapTimeDataFacade} from "../../../data/LapTimeDataFacade"
import {convertSessionResultNode} from "../session-results/convertSessionResultNode"

export async function findConnectedSessionResult(id: number) {
    const relation = await LapTimeDataFacade.getConnectedSessionResultNode(id)

    if (!relation) {
        return null
    }

    return convertSessionResultNode(relation.partner_node)
}
