import {ModelNodeType} from "../../../types/ModelNodeType"

export type SessionResult = {
    type: ModelNodeType.SESSION_RESULT
    fields: {
        id: number
        position: number
        race_number: string | null
        driver_name: string
        team_name: string | null
        race_time: string | null
        laps: number | null
        status: string | null
        points: number | null
        created_at: string
        updated_at: string
    }
}
