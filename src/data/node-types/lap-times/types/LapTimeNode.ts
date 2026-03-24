import type {DataNodeType} from "../../../types/DataNodeType"

export type LapTimeNode = {
    type: DataNodeType.LAP_TIME
    data: {
        id: number
        time: string
        driver_name: string
        date?: string
        created_at: string
        updated_at: string
    }
}
