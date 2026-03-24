import {MotorShowNode} from "../../../data/node-types/motor-shows/types/MotorShowNode"
import {MotorShow} from "./types/MotorShow"
import {ModelNodeType} from "../../types/ModelNodeType"

export function convertMotorShowNode(dataNode: MotorShowNode) {
    const motorShow: MotorShow = {
        type: ModelNodeType.MOTOR_SHOW,
        fields: {
            id: dataNode.data.id,
            name: dataNode.data.name,
            date_from: dataNode.data.date_from || null,
            date_until: dataNode.data.date_until || null,
            location: dataNode.data.location || null,
            target_audience: dataNode.data.target_audience || null,
            focus: dataNode.data.focus || null,
            created_at: dataNode.data.created_at,
            updated_at: dataNode.data.updated_at,
        }
    }

    return motorShow
}
