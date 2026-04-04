import {VideoNode} from "../../../data/node-types/videos/types/VideoNode"
import {Video} from "./types/Video"
import {ModelNodeType} from "../../types/ModelNodeType"

export function convertVideoNode(dataNode: VideoNode) {
    const video: Video = {
        type: ModelNodeType.VIDEO,
        fields: {
            id: dataNode.data.id,
            video_provider: dataNode.data.video_provider,
            external_id: dataNode.data.external_id,
            title: dataNode.data.title || null,
            description: dataNode.data.description || null,
            creator: dataNode.data.creator || null,
            license: dataNode.data.license || null,
            tags: dataNode.data.tags || null,
            source: dataNode.data.source || null,
            duration: dataNode.data.duration || null,
            thumbnail_url_l: dataNode.data.thumbnail_url_l || null,
            thumbnail_url_m: dataNode.data.thumbnail_url_m || null,
            thumbnail_url_s: dataNode.data.thumbnail_url_s || null,
            thumbnail_url_xs: dataNode.data.thumbnail_url_xs || null,
            created_at: dataNode.data.created_at,
            updated_at: dataNode.data.updated_at,
        }
    }

    return video
}
