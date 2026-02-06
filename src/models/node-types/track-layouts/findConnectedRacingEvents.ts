import {TrackLayoutDataFacade} from "../../../data/TrackLayoutDataFacade"
import {RacingEvent} from "../racing-events/types/RacingEvent"
import {convertRacingEventNode} from "../racing-events/convertRacingEventNode"

export async function findConnectedRacingEvents(id: number) {
    const relations = await TrackLayoutDataFacade.getConnectedRacingEventNodes(id)
    const racingEvents: RacingEvent[] = []

    for (const relation of relations) {
        racingEvents.push(convertRacingEventNode(relation.partner_node))
    }

    return [...racingEvents].sort((a, b) => (b.date_from + "").localeCompare(a.date_to + ""))
}
