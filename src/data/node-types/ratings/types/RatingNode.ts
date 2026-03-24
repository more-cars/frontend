import type {DataNodeType} from "../../../types/DataNodeType"

export type RatingNode = {
    type: DataNodeType.RATING
    data: {
        id: number
        rating_value: number
        scale_minimum: number
        scale_maximum: number
        scale_direction: string
        created_at: string
        updated_at: string
    }
}
