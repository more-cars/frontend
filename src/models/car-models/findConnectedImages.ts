import {CarModelDataFacade} from "../../data/CarModelDataFacade"
import type {ImageNode} from "../images/types/ImageNode"

export async function findConnectedImages(id: number) {
    const relations = await CarModelDataFacade.getConnectedImageNodes(id)
    const nodes: ImageNode[] = []

    for (const relation of relations) {
        nodes.push(relation.partner_node)
    }

    return nodes
}
