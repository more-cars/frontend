import type {ApiNodeType} from "../../../types/ApiNodeType"

export type ApiVideoNode = {
    type: ApiNodeType.VIDEO
    id: number
    attributes: {
        video_provider: string
        external_id: string
        title?: string
        description?: string
        creator?: string
        license?: string
        tags?: string
        source?: string
        duration?: string
        thumbnail_url_l?: string
        thumbnail_url_m?: string
        thumbnail_url_s?: string
        thumbnail_url_xs?: string
        created_at: string
        updated_at: string
    }
    links: {
        self: string
    }
}
