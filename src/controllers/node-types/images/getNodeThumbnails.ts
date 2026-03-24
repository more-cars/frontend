import {Image} from "../../../models/node-types/images/types/Image"
import type {ModelNode} from "../../../models/types/ModelNode"
import {CarModelVariantModelFacade} from "../../../models/CarModelVariantModelFacade"

export async function getNodeThumbnails(nodes: ModelNode[]) {
    const thumbnails = new Map<number, Image | null>

    for (const node of nodes) {
        thumbnails.set(node.fields.id, await CarModelVariantModelFacade.getConnectedMainImage(node.fields.id) || null)
    }

    return thumbnails
}
