export type ApiSessionResultNode = {
    data: {
        id: number
        position: number
        race_number?: string
        driver_name: string
        team_name?: string
        race_time?: string
        laps?: number
        status?: string
        points?: number
        created_at: string
        updated_at: string
    }
}
