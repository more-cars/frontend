import {LapTimeNode} from "../../../data/node-types/lap-times/types/LapTimeNode"
import {LapTime} from "./types/LapTime"

export function convertLapTimeNode(dataNode: LapTimeNode) {
    const lapTime: LapTime = {
        id: dataNode.id,
        time: dataNode.time,
        driver_name: dataNode.driver_name,
        date: dataNode.date || null,
        created_at: dataNode.created_at,
        updated_at: dataNode.updated_at,
    }

    return lapTime
}
