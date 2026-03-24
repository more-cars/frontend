import {RacingSessionNode} from "../../../data/node-types/racing-sessions/types/RacingSessionNode"
import {RacingSession} from "./types/RacingSession"
import {ModelNodeType} from "../../types/ModelNodeType"

export function convertRacingSessionNode(dataNode: RacingSessionNode) {
    const racingSession: RacingSession = {
        type: ModelNodeType.RACING_SESSION,
        fields: {
            id: dataNode.data.id,
            name: dataNode.data.name,
            start_date: dataNode.data.start_date || null,
            start_time: dataNode.data.start_time || null,
            duration: dataNode.data.duration || null,
            duration_unit: dataNode.data.duration_unit || null,
            distance: dataNode.data.distance || null,
            distance_unit: dataNode.data.distance_unit || null,
            created_at: dataNode.data.created_at,
            updated_at: dataNode.data.updated_at,
        }
    }

    return racingSession
}
