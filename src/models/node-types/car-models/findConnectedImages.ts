import {CarModelDataFacade} from "../../../data/CarModelDataFacade"
import type {Image} from "../images/types/Image"

export async function findConnectedImages(id: number) {
    const relations = await CarModelDataFacade.getConnectedImageNodes(id)
    const nodes: Image[] = []

    for (const relation of relations) {
        nodes.push(relation.partner_node)
    }

    return nodes
}
