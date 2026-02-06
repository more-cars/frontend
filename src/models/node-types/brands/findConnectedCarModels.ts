import {BrandDataFacade} from "../../../data/BrandDataFacade"
import type {CarModel} from "../car-models/types/CarModel"
import {convertCarModelNode} from "../car-models/convertCarModelNode"

export async function findConnectedCarModels(id: number) {
    const relations = await BrandDataFacade.getConnectedCarModelNodes(id)
    const carModels: CarModel[] = []

    for (const relation of relations) {
        carModels.push(convertCarModelNode(relation.partner_node))
    }

    return [...carModels].sort((a, b) => (a.name + a.built_from + "").localeCompare(b.name + b.built_from + ""))
}
