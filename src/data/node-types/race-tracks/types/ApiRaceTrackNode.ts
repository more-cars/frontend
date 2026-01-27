export type ApiRaceTrackNode = {
    data: {
        id: number
        name: string
        opened?: number
        closed?: number
        type?: string
        location?: string
        geo_position?: string
        created_at: string
        updated_at: string
    }
}
