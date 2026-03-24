import {ModelNodeType} from "../../../types/ModelNodeType"

export type GamingPlatform = {
    type: ModelNodeType.GAMING_PLATFORM
    fields: {
        id: number
        name: string
        release_year: number | null
        manufacturer: string | null
        created_at: string
        updated_at: string
    }
}
