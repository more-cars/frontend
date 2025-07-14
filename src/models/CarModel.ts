import type {CarModelNode} from "../types/car-models/CarModelNode.mts"
import {getCarModelById} from "../data/car-models/getCarModelById.ts"
import {getAllCarModels} from "../data/car-models/getAllCarModels.ts"

export class CarModel {
    static async findAll(): Promise<Array<CarModelNode>> {
        const carModels = await getAllCarModels()

        if (!carModels) {
            return []
        }

        return carModels
    }

    static async findById(id: number): Promise<false | CarModelNode> {
        const carModel = await getCarModelById(id)

        if (!carModel) {
            return false
        }

        return carModel
    }
}
