import type {DataNodeType} from "../../../types/DataNodeType"

export type ProgrammeEpisodeNode = {
    type: DataNodeType.PROGRAMME_EPISODE
    data: {
        id: number
        title: string
        season_number?: number
        season_episode_number?: number
        original_air_date?: string
        duration?: string
        created_at: string
        updated_at: string
    }
}
