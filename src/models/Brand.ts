import type {BrandNode} from "../types/brands/BrandNode.mts"
import type {CarModelNode} from "../types/car-models/CarModelNode.mts"
import {getBrandById} from "../data/brands/getBrandById.ts"
import {getAllBrands} from "../data/brands/getAllBrands.ts"
import {getConnectedCarModels} from "../data/brands/getConnectedCarModels.ts"
import {getCarModelById} from "../data/car-models/getCarModelById.ts"

export class Brand {
    static async findById(id: number): Promise<false | BrandNode> {
        const brand = await getBrandById(id)

        if (!brand) {
            return false
        }

        return brand
    }

    static async findAll(): Promise<Array<BrandNode>> {
        const brands = await getAllBrands()

        if (!brands) {
            return []
        }

        return brands
    }

    static async findConnectedCarModels(brandId: number): Promise<Array<CarModelNode>> {
        const carModelRelations = await getConnectedCarModels(brandId)
        const carModels = []

        for (const carModelRelation of carModelRelations) {
            carModels.push(await getCarModelById(carModelRelation.car_model_id))
        }

        return carModels
    }
}
