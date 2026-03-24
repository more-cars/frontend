import {ModelNodeType} from "../../../types/ModelNodeType"

export type RacingSeries = {
    type: ModelNodeType.RACING_SERIES
    fields: {
        id: number
        name: string
        short_name: string | null
        founded: number | null
        defunct: number | null
        organized_by: string | null
        vehicle_type: string | null
        created_at: string
        updated_at: string
    }
}
