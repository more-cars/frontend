import type {DataNodeType} from "../../../types/DataNodeType"

export type RacingEventNode = {
    type: DataNodeType.RACING_EVENT
    data: {
        id: number
        name: string
        round?: number
        date_from?: string
        date_to?: string
        created_at: string
        updated_at: string
    }
}
