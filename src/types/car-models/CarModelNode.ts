export type CarModelNode = {
    data: {
        id: number
        name: string
        generation?: number
        internal_code?: string
        built_from?: number
        built_to?: number
        total_production?: number
        created_at: string
        updated_at: string
    }
}
