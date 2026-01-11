import {BrandDataFacade} from "../../../data/BrandDataFacade"
import type {Image} from "../images/types/Image"

export async function findConnectedImages(id: number) {
    const relations = await BrandDataFacade.getConnectedImageNodes(id)
    const nodes: Image[] = []

    for (const relation of relations) {
        nodes.push(relation.partner_node)
    }

    return nodes
}
