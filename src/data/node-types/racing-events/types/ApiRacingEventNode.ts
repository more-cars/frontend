import type {ApiNodeType} from "../../../types/ApiNodeType"

export type ApiRacingEventNode = {
    type: ApiNodeType.RACING_EVENT
    id: number
    attributes: {
        name: string
        round?: number
        date_from?: string
        date_to?: string
        created_at: string
        updated_at: string
    }
    links: {
        self: string
    }
}
