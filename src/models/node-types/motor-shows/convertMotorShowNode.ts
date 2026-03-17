import {MotorShowNode} from "../../../data/node-types/motor-shows/types/MotorShowNode"
import {MotorShow} from "./types/MotorShow"

export function convertMotorShowNode(dataNode: MotorShowNode) {
    const motorShow: MotorShow = {
        id: dataNode.id,
        name: dataNode.name,
        date_from: dataNode.date_from || null,
        date_until: dataNode.date_until || null,
        location: dataNode.location || null,
        target_audience: dataNode.target_audience || null,
        focus: dataNode.focus || null,
        created_at: dataNode.created_at,
        updated_at: dataNode.updated_at,
    }

    return motorShow
}
