import {RacingEventNode} from "../../../data/node-types/racing-events/types/RacingEventNode"
import {RacingEvent} from "./types/RacingEvent"
import {ModelNodeType} from "../../types/ModelNodeType"

export function convertRacingEventNode(dataNode: RacingEventNode) {
    const racingEvent: RacingEvent = {
        type: ModelNodeType.RACING_EVENT,
        fields: {
            id: dataNode.data.id,
            name: dataNode.data.name,
            round: dataNode.data.round || null,
            date_from: dataNode.data.date_from || null,
            date_to: dataNode.data.date_to || null,
            created_at: dataNode.data.created_at,
            updated_at: dataNode.data.updated_at,
        }
    }

    return racingEvent
}
