import type {ApiNodeType} from "../../../types/ApiNodeType"

export type ApiSessionResultNode = {
    type: ApiNodeType.SESSION_RESULT
    id: number
    attributes: {
        position: number
        race_number?: string
        driver_name: string
        team_name?: string
        race_time?: string
        laps?: number
        status?: string
        points?: number
        created_at: string
        updated_at: string
    }
    links: {
        self: string
    }
}
