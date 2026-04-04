import type {DataNodeType} from "../../../types/DataNodeType"

export type VideoNode = {
    type: DataNodeType.VIDEO
    data: {
        id: number
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
}
