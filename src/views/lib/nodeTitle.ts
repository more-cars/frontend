import type {ModelNode} from "../../models/types/ModelNode"
import {NodeModelFacade} from "../../models/NodeModelFacade"

export function nodeTitle(node: ModelNode) {
    return NodeModelFacade.getNodeTitle(node)
}
