export type ApiRatingNode = {
    type: string
    id: number
    attributes: {
        rating_value: number
        scale_minimum: number
        scale_maximum: number
        scale_direction: string
        created_at: string
        updated_at: string
    }
}
