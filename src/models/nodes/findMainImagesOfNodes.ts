import {NodeDataFacade} from "../../data/NodeDataFacade"
import {convertImageNode} from "../node-types/images/convertImageNode"
import {Image} from "../node-types/images/types/Image"

export async function findMainImagesOfNodes(ids: number[]) {
    const images = new Map<number, Image>() // start node id -> image node

    const relations = await NodeDataFacade.getMainImagesOfNodes(ids)

    for (const relation of relations) {
        images.set(relation.source_node.data.id, convertImageNode(relation.partner_node))
    }

    return images
}
