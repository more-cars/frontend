import type {CarModelNode} from "../types/car-models/CarModelNode.mts"
import type {BrandNode} from "../types/brands/BrandNode.mts"
import type {ImageNode} from "../types/images/ImageNode.mts"
import {getCarModelById} from "../data/car-models/getCarModelById.ts"
import {getAllCarModels} from "../data/car-models/getAllCarModels.ts"
import {getConnectedBrand} from "../data/car-models/getConnectedBrand.ts"
import {getBrandById} from "../data/brands/getBrandById.ts"
import {getConnectedImages} from "../data/car-models/getConnectedImages.ts"
import {getImageById} from "../data/images/getImageById.ts"

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

    static async findConnectedImages(carModelId: number): Promise<Array<ImageNode>> {
        const imageRelations = await getConnectedImages(carModelId)
        const images = []

        for (const imageRelation of imageRelations) {
            images.push(await getImageById(imageRelation.image_id))
        }

        return images
    }
}
