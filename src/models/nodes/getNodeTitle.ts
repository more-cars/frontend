import type {ModelNode} from "../types/ModelNode"
import {getNodeTypeModelFacade} from "./getNodeTypeModelFacade"

export function getNodeTitle(node: ModelNode) {
    const modelFacade = getNodeTypeModelFacade(node.type)

    return modelFacade.getNodeTitle(node)
}
