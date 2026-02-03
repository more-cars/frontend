import {RacingSessionNode} from "../../../data/node-types/racing-sessions/types/RacingSessionNode"
import {RacingSession} from "./types/RacingSession"

export function convertRacingSessionNode(dataNode: RacingSessionNode) {
    const racingSession: RacingSession = {
        id: dataNode.id,
        name: dataNode.name,
        start_date: dataNode.start_date || null,
        start_time: dataNode.start_time || null,
        duration: dataNode.duration || null,
        duration_unit: dataNode.duration_unit || null,
        distance: dataNode.distance || null,
        distance_unit: dataNode.distance_unit || null,
        created_at: dataNode.created_at,
        updated_at: dataNode.updated_at,
    }

    return racingSession
}
