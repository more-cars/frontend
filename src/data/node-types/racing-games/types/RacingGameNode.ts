import type {DataNodeType} from "../../../types/DataNodeType"

export type RacingGameNode = {
    type: DataNodeType.RACING_GAME
    data: {
        id: number
        name: string
        release_year?: number
        developer?: string
        publisher?: string
        created_at: string
        updated_at: string
    }
}
