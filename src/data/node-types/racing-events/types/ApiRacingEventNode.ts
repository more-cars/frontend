export type ApiRacingEventNode = {
    type: 'racing-events'
    id: number
    attributes: {
        name: string
        round?: number
        date_from?: string
        date_to?: string
        created_at: string
        updated_at: string
    }
    links: {
        self: string
    }
}
