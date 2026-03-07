export type ApiCarModelNode = {
    type: 'car-models'
    id: number
    attributes: {
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
