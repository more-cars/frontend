import {VideoDataFacade} from "../../../data/VideoDataFacade"
import type {ModelNode} from "../../types/ModelNode"
import {convertDataNodeToModelNode} from "../../nodes/convertDataNodeToModelNode"

export async function findConnectedNodes(id: number) {
    const relations = await VideoDataFacade.getConnectedNodeNodes(id)
    const nodes: ModelNode[] = []

    for (const relation of relations) {
        nodes.push(convertDataNodeToModelNode(relation.partner_node))
    }

    return nodes
}
