import {ModelNodeType} from "../../../types/ModelNodeType"

export type RacingEvent = {
    type: ModelNodeType.RACING_EVENT
    fields: {
        id: number
        name: string
        round: number | null
        date_from: string | null
        date_to: string | null
        created_at: string
        updated_at: string
    }
}
