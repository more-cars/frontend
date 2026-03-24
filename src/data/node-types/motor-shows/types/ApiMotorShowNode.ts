import type {ApiNodeType} from "../../../types/ApiNodeType"

export type ApiMotorShowNode = {
    type: ApiNodeType.MOTOR_SHOW
    id: number
    attributes: {
        name: string
        date_from?: string
        date_until?: string
        location?: string
        target_audience?: string
        focus?: string
        created_at: string
        updated_at: string
    }
    links: {
        self: string
    }
}
