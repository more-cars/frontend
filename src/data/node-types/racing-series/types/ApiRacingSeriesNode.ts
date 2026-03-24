import type {ApiNodeType} from "../../../types/ApiNodeType"

export type ApiRacingSeriesNode = {
    type: ApiNodeType.RACING_SERIES
    id: number
    attributes: {
        name: string
        short_name?: string
        founded?: number
        defunct?: number
        organized_by?: string
        vehicle_type?: string
        created_at: string
        updated_at: string
    }
    links: {
        self: string
    }
}
