import type {CarModelNode} from "../types/car-models/CarModelNode.mts"
import {getAllCarModels} from "../data/car-models/getAllCarModels.ts"

export class CarModel {
    static async findAll(): Promise<Array<CarModelNode>> {
        const carModels = await getAllCarModels()

        if (!carModels) {
            return []
        }

        return carModels
    }
}
