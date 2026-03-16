export type ApiProgrammeNode = {
    type: string
    id: number
    attributes: {
        name: string
        aired_from_year?: number
        aired_until_year?: number
        channel?: string
        total_seasons?: number
        total_episodes?: number
        regular_episode_running_time?: string
        created_at: string
        updated_at: string
    }
}
