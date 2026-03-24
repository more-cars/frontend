import type {ApiNodeType} from "../../../types/ApiNodeType"

export type ApiRatingNode = {
    type: ApiNodeType.RATING
    id: number
    attributes: {
        rating_value: number
        scale_minimum: number
        scale_maximum: number
        scale_direction: string
        created_at: string
        updated_at: string
    }
    links: {
        self: string
    }
}
