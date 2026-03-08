import {MagazineIssueDataFacade} from "../../../data/MagazineIssueDataFacade"
import {RacingEvent} from "../racing-events/types/RacingEvent"
import {convertRacingEventNode} from "../racing-events/convertRacingEventNode"

export async function findConnectedRacingEvents(id: number) {
    const relations = await MagazineIssueDataFacade.getConnectedRacingEventNodes(id)
    const racingEvents: RacingEvent[] = []

    for (const relation of relations) {
        racingEvents.push(convertRacingEventNode(relation.partner_node))
    }

    return [...racingEvents].sort((a, b) => (a.name + "").localeCompare(b.name + ""))
}
