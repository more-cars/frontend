export type ApiProgrammeEpisodeNode = {
    type: string
    id: number
    attributes: {
        title: string
        season_number?: number
        season_episode_number?: number
        original_air_date?: string
        duration?: string
        created_at: string
        updated_at: string
    }
    links: {
        self: string
    }
}
