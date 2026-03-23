import {ImageDataFacade} from "../../../data/ImageDataFacade"
import {convertDataNodeToModelNode} from "../../nodes/convertDataNodeToModelNode"
import type {ModelNode} from "../../types/ModelNode"

export async function findConnectedNodes(id: number) {
    const relations = await ImageDataFacade.getConnectedNodes(id)
    const nodes: ModelNode[] = []

    for (const relation of relations) {
        nodes.push(convertDataNodeToModelNode(relation.partner_node_type, relation.partner_node))
    }

    return nodes
}
