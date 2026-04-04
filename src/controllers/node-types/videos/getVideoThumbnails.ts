import type {Image} from "../../../models/node-types/images/types/Image"
import type {Video} from "../../../models/node-types/videos/types/Video"
import {ModelNodeType} from "../../../models/types/ModelNodeType"

export async function getVideoThumbnails(videos: Video[]) {
    const images = new Map<number, Image>() // video id -> dummy image node

    for (const video of videos) {
        images.set(video.fields.id, {
            type: ModelNodeType.IMAGE,
            fields: {
                id: -1,
                image_provider: "",
                external_id: "",
                creator: "",
                description: "",
                image_url_l: "",
                image_url_m: "",
                image_url_original: "",
                image_url_s: video.fields.thumbnail_url_s,
                image_url_xl: "",
                image_url_xs: "",
                image_url_xxl: "",
                license: "",
                name: "",
                source: "",
                tags: "",
                updated_at: "",
                created_at: "",
            },
        })
    }

    return images
}
