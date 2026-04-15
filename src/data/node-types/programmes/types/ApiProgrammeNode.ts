import type {ApiNodeType} from "../../../types/ApiNodeType"

export type ApiProgrammeNode = {
    type: ApiNodeType.PROGRAMME
    id: number
    attributes: {
        name: string
        aired_from_year?: number
        aired_until_year?: number
        channel?: string
        total_seasons?: number
        total_episodes?: number
        regular_episode_running_time?: string
        country_code?: string
        created_at: string
        updated_at: string
    }
    links: {
        self: string
    }
}
