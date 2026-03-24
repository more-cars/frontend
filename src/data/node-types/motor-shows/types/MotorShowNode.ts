import type {DataNodeType} from "../../../types/DataNodeType"

export type MotorShowNode = {
    type: DataNodeType.MOTOR_SHOW
    data: {
        id: number
        name: string
        date_from?: string
        date_until?: string
        location?: string
        target_audience?: string
        focus?: string
        created_at: string
        updated_at: string
    }
}
