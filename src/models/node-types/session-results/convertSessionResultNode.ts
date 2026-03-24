import {SessionResultNode} from "../../../data/node-types/session-results/types/SessionResultNode"
import {SessionResult} from "./types/SessionResult"
import {ModelNodeType} from "../../types/ModelNodeType"

export function convertSessionResultNode(dataNode: SessionResultNode) {
    const sessionResult: SessionResult = {
        type: ModelNodeType.SESSION_RESULT,
        fields: {
            id: dataNode.data.id,
            position: dataNode.data.position,
            race_number: dataNode.data.race_number || null,
            driver_name: dataNode.data.driver_name,
            team_name: dataNode.data.team_name || null,
            race_time: dataNode.data.race_time || null,
            laps: dataNode.data.laps || null,
            status: dataNode.data.status || null,
            points: dataNode.data.points || null,
            created_at: dataNode.data.created_at,
            updated_at: dataNode.data.updated_at,
        }
    }

    return sessionResult
}
