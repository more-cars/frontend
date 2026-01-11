import {ImageNode} from "../../../data/node-types/images/types/ImageNode"
import {Image} from "./types/Image"

export function convertImageNode(dataNode: ImageNode) {
    const image: Image = {
        id: dataNode.id,
        image_provider: dataNode.image_provider,
        external_id: dataNode.external_id,
        name: dataNode.name,
        description: dataNode.description || null,
        creator: dataNode.creator,
        license: dataNode.license,
        tags: dataNode.tags || null,
        source: dataNode.source,
        image_url_original: dataNode.image_url_original,
        image_url_xxl: dataNode.image_url_xxl || null,
        image_url_xl: dataNode.image_url_xl || null,
        image_url_l: dataNode.image_url_l || null,
        image_url_m: dataNode.image_url_m || null,
        image_url_s: dataNode.image_url_s || null,
        image_url_xs: dataNode.image_url_xs || null,
        created_at: dataNode.created_at,
        updated_at: dataNode.updated_at,
    }

    return image
}
