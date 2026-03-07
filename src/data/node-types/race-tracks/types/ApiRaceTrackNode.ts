export type ApiRaceTrackNode = {
    type: 'race-tracks'
    id: number
    attributes: {
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
