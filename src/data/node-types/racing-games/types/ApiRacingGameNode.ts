import type {ApiNodeType} from "../../../types/ApiNodeType"

export type ApiRacingGameNode = {
    type: ApiNodeType.RACING_GAME
    id: number
    attributes: {
        name: string
        release_year?: number
        developer?: string
        publisher?: string
        created_at: string
        updated_at: string
    }
    links: {
        self: string
    }
}
