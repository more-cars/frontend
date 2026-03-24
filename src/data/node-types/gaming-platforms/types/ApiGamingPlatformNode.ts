export type ApiGamingPlatformNode = {
    type: string
    id: number
    attributes: {
        name: string
        release_year?: number
        manufacturer?: string
        created_at: string
        updated_at: string
    }
    links: {
        self: string
    }
}
