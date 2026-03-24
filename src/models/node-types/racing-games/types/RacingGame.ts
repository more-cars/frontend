import {ModelNodeType} from "../../../types/ModelNodeType"

export type RacingGame = {
    type: ModelNodeType.RACING_GAME
    fields: {
        id: number
        name: string
        release_year: number | null
        developer: string | null
        publisher: string | null
        created_at: string
        updated_at: string
    }
}
