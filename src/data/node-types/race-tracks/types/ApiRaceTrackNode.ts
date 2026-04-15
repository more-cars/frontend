import type {ApiNodeType} from "../../../types/ApiNodeType"

export type ApiRaceTrackNode = {
    type: ApiNodeType.RACE_TRACK
    id: number
    attributes: {
        name: string
        opened?: number
        closed?: number
        type?: string
        location?: string
        geo_position?: string
        country_code?: string
        created_at: string
        updated_at: string
    }
    links: {
        self: string
    }
}
