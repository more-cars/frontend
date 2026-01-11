import {BrandDataFacade} from "../../../data/BrandDataFacade"
import type {CarModel} from "../car-models/types/CarModel"

export async function findConnectedCarModels(id: number) {
    const relations = await BrandDataFacade.getConnectedCarModelNodes(id)
    const nodes: CarModel[] = []

    for (const relation of relations) {
        nodes.push(relation.partner_node)
    }

    return nodes
}
