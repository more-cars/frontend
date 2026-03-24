import type {ApiNodeType} from "../../../types/ApiNodeType"

export type ApiGamingPlatformNode = {
    type: ApiNodeType.GAMING_PLATFORM
    id: number
    attributes: {
        name: string
        release_year?: number
        manufacturer?: string
        created_at: string
        updated_at: string
    }
    links: {
        self: string
    }
}
