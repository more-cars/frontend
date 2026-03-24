import {ImageNode} from "../../../data/node-types/images/types/ImageNode"
import {Image} from "./types/Image"
import {ModelNodeType} from "../../types/ModelNodeType"

export function convertImageNode(dataNode: ImageNode) {
    const image: Image = {
        type: ModelNodeType.IMAGE,
        fields: {
            id: dataNode.data.id,
            image_provider: dataNode.data.image_provider,
            external_id: dataNode.data.external_id,
            name: dataNode.data.name,
            description: dataNode.data.description || null,
            creator: dataNode.data.creator,
            license: dataNode.data.license,
            tags: dataNode.data.tags || null,
            source: dataNode.data.source,
            image_url_original: dataNode.data.image_url_original,
            image_url_xxl: dataNode.data.image_url_xxl || null,
            image_url_xl: dataNode.data.image_url_xl || null,
            image_url_l: dataNode.data.image_url_l || null,
            image_url_m: dataNode.data.image_url_m || null,
            image_url_s: dataNode.data.image_url_s || null,
            image_url_xs: dataNode.data.image_url_xs || null,
            created_at: dataNode.data.created_at,
            updated_at: dataNode.data.updated_at,
        }
    }

    // TODO temporary fix -> wikimedia does not support arbitrary image resolutions anymore
    if (image.fields.image_provider === 'wikimedia') {
        if (image.fields.image_url_s) {
            image.fields.image_url_s = image.fields.image_url_s.replace('/320px-', '/330px-')
        }
        if (image.fields.image_url_m) {
            image.fields.image_url_m = image.fields.image_url_m.replace('/640px-', '/960px-')
        }
    }

    return image
}
