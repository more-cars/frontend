import {LapTimeNode} from "../../../data/node-types/lap-times/types/LapTimeNode"
import {LapTime} from "./types/LapTime"
import {ModelNodeType} from "../../types/ModelNodeType"

export function convertLapTimeNode(dataNode: LapTimeNode) {
    const lapTime: LapTime = {
        type: ModelNodeType.LAP_TIME,
        fields: {
            id: dataNode.data.id,
            time: dataNode.data.time,
            driver_name: dataNode.data.driver_name,
            date: dataNode.data.date || null,
            created_at: dataNode.data.created_at,
            updated_at: dataNode.data.updated_at,
        }
    }

    return lapTime
}
