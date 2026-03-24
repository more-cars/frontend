import {ModelNodeType} from "../../../types/ModelNodeType"

export type ProgrammeEpisode = {
    type: ModelNodeType.PROGRAMME_EPISODE
    fields: {
        id: number
        title: string
        season_number: number | null
        season_episode_number: number | null
        original_air_date: string | null
        duration: string | null
        created_at: string
        updated_at: string
    }
}
