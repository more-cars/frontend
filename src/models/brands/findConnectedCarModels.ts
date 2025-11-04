import {BrandDataFacade} from "../../data/BrandDataFacade"
import type {CarModelNode} from "../../types/car-models/CarModelNode"

export async function findConnectedCarModels(brandId: number) {
    const carModelRelations = await BrandDataFacade.getConnectedCarModelNodes(brandId)
    if (!carModelRelations) {
        return []
    }

    const carModels = []
    for (const carModelRelation of carModelRelations) {
        carModels.push(carModelRelation.data.relationship_partner as CarModelNode)
    }

    return carModels
}
