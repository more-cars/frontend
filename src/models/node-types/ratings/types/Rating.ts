import {ModelNodeType} from "../../../types/ModelNodeType"

export type Rating = {
    type: ModelNodeType.RATING
    fields: {
        id: number
        rating_value: number
        scale_minimum: number
        scale_maximum: number
        scale_direction: string
        created_at: string
        updated_at: string
    }
}
