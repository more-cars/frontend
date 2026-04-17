import type {ModelNode} from "../../models/types/ModelNode"
import {ModelNodeType} from "../../models/types/ModelNodeType"
import {Image} from "../../models/node-types/images/types/Image"
import {NodeModelFacade} from "../../models/NodeModelFacade"

export async function getNodeThumbnails(nodes: ModelNode[]) {
    if (nodes[0].type === ModelNodeType.IMAGE) {
        const thumbnails = new Map<number, Image>()

        nodes.forEach(node => {
            thumbnails.set(node.fields.id, node as Image)
        })

        return thumbnails
    }

    const nodeIds = nodes.map(node => node.fields.id)

    return NodeModelFacade.getMainImagesOfNodes(nodeIds)
}
