import type {DataNodeType} from "../../../types/DataNodeType"

export type RacingSeriesNode = {
    type: DataNodeType.RACING_SERIES
    data: {
        id: number
        name: string
        short_name?: string
        founded?: number
        defunct?: number
        organized_by?: string
        vehicle_type?: string
        country_code?: string
        created_at: string
        updated_at: string
    }
}
