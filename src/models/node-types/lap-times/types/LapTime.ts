import {ModelNodeType} from "../../../types/ModelNodeType"

export type LapTime = {
    type: ModelNodeType.LAP_TIME
    fields: {
        id: number
        time: string
        driver_name: string
        date: string | null
        created_at: string
        updated_at: string
    }
}
