export type ApiRacingSessionNode = {
    type: 'racing-sessions'
    id: number
    attributes: {
        name: string
        start_date?: string
        start_time?: string
        duration?: number
        duration_unit?: string
        distance?: number
        distance_unit?: string
        created_at: string
        updated_at: string
    }
}
