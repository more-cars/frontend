import {RacingEventDataFacade} from "../../../data/RacingEventDataFacade"
import {RacingSession} from "../racing-sessions/types/RacingSession"
import {convertRacingSessionNode} from "../racing-sessions/convertRacingSessionNode"

export async function findConnectedRacingSessions(id: number) {
    const relations = await RacingEventDataFacade.getConnectedRacingSessionNodes(id)
    const racingSessions: RacingSession[] = []

    for (const relation of relations) {
        racingSessions.push(convertRacingSessionNode(relation.partner_node))
    }

    return [...racingSessions].sort((a, b) => (a.fields.start_date as string + a.fields.start_time as string + "").localeCompare(b.fields.start_date as string + b.fields.start_time as string + ""))
}
