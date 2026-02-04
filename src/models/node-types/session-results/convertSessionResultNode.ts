import {SessionResultNode} from "../../../data/node-types/session-results/types/SessionResultNode"
import {SessionResult} from "./types/SessionResult"

export function convertSessionResultNode(dataNode: SessionResultNode) {
    const sessionResult: SessionResult = {
        id: dataNode.id,
        position: dataNode.position,
        race_number: dataNode.race_number || null,
        driver_name: dataNode.driver_name,
        team_name: dataNode.team_name || null,
        race_time: dataNode.race_time || null,
        laps: dataNode.laps || null,
        status: dataNode.status || null,
        points: dataNode.points || null,
        created_at: dataNode.created_at,
        updated_at: dataNode.updated_at,
    }

    return sessionResult
}
