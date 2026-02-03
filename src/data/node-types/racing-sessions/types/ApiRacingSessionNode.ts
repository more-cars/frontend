export type ApiRacingSessionNode = {
    data: {
        id: number
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
