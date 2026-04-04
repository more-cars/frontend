import type {ModelNode} from "../../models/types/ModelNode"
import {NodeModelFacade} from "../../models/NodeModelFacade"

export async function getNodeThumbnails(nodes: ModelNode[]) {
    const nodeIds = nodes.map(node => node.fields.id)

    return await NodeModelFacade.getMainImagesOfNodes(nodeIds)
}
