import {getConnectedCarModels} from "../../data/brands/getConnectedCarModels"
import type {CarModelNode} from "../../types/car-models/CarModelNode"

export async function findConnectedCarModels(brandId: number) {
    const carModelRelations = await getConnectedCarModels(brandId)
    if (!carModelRelations) {
        return []
    }

    const carModels = []
    for (const carModelRelation of carModelRelations) {
        carModels.push(carModelRelation.data.relationship_partner as CarModelNode)
    }

    return carModels
}
