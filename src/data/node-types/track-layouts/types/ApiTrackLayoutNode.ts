import type {ApiNodeType} from "../../../types/ApiNodeType"

export type ApiTrackLayoutNode = {
    type: ApiNodeType.TRACK_LAYOUT
    id: number
    attributes: {
        name: string
        year_from?: number
        year_to?: number
        length?: number
        length_unit?: string
        direction?: string
        elevation_change?: number
        elevation_change_unit?: string
        surface?: string
        created_at: string
        updated_at: string
    }
    links: {
        self: string
    }
}
