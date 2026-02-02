import {RacingEventNode} from "../../../data/node-types/racing-events/types/RacingEventNode"
import {RacingEvent} from "./types/RacingEvent"

export function convertRacingEventNode(dataNode: RacingEventNode) {
    const racingEvent: RacingEvent = {
        id: dataNode.id,
        name: dataNode.name,
        round: dataNode.round || null,
        date_from: dataNode.date_from || null,
        date_to: dataNode.date_to || null,
        created_at: dataNode.created_at,
        updated_at: dataNode.updated_at,
    }

    return racingEvent
}
