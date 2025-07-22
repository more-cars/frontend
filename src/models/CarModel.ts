import type {CarModelNode} from "../types/car-models/CarModelNode.mts"
import type {BrandNode} from "../types/brands/BrandNode.mts"
import {getCarModelById} from "../data/car-models/getCarModelById.ts"
import {getAllCarModels} from "../data/car-models/getAllCarModels.ts"
import {getConnectedBrand} from "../data/car-models/getConnectedBrand.ts"
import {getBrandById} from "../data/brands/getBrandById.ts"

export class CarModel {
    static async findAll(): Promise<Array<CarModelNode>> {
        const carModels = await getAllCarModels()

        if (!carModels) {
            return []
        }

        // TODO remove the limiter when pagination is implemented
        return carModels.slice(0, 100)
    }

    static async findById(id: number): Promise<false | CarModelNode> {
        const carModel = await getCarModelById(id)

        if (!carModel) {
            return false
        }

        return carModel
    }

    static async findConnectedBrand(carModelId: number): Promise<BrandNode> {
        const brandRelation = await getConnectedBrand(carModelId)

        return await getBrandById(brandRelation.brand_id)
    }
}
