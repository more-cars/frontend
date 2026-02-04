import {RacingSessionDataFacade} from "../../../data/RacingSessionDataFacade"
import {SessionResult} from "../session-results/types/SessionResult"
import {convertSessionResultNode} from "../session-results/convertSessionResultNode"

export async function findConnectedSessionResults(id: number) {
    const relations = await RacingSessionDataFacade.getConnectedSessionResultNodes(id)
    const sessionResults: SessionResult[] = []

    for (const relation of relations) {
        sessionResults.push(convertSessionResultNode(relation.partner_node))
    }

    return sessionResults
}
