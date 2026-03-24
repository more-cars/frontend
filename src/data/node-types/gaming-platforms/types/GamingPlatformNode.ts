import type {DataNodeType} from "../../../types/DataNodeType"

export type GamingPlatformNode = {
    type: DataNodeType.GAMING_PLATFORM
    data: {
        id: number
        name: string
        release_year?: number
        manufacturer?: string
        created_at: string
        updated_at: string
    }
}
