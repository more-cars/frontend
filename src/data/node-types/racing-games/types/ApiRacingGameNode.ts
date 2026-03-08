export type ApiRacingGameNode = {
    type: string
    id: number
    attributes: {
        name: string
        release_year?: number
        developer?: string
        publisher?: string
        created_at: string
        updated_at: string
    }
}
