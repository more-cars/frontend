import type {BrandNode} from "../types/brands/BrandNode.mts"
import type {CarModelNode} from "../types/car-models/CarModelNode.mts"
import type {ImageNode} from "../types/images/ImageNode.mts"
import {getBrandById} from "../data/brands/getBrandById.ts"
import {getAllBrands} from "../data/brands/getAllBrands.ts"
import {getConnectedCarModels} from "../data/brands/getConnectedCarModels.ts"
import {getCarModelById} from "../data/car-models/getCarModelById.ts"
import {getConnectedImages} from "../data/brands/getConnectedImages.ts"
import {getImageById} from "../data/images/getImageById.ts"

export class Brand {
    static async findAll(): Promise<Array<BrandNode>> {
        const brands = await getAllBrands()

        if (!brands) {
            return []
        }

        // TODO remove the limiter when pagination is implemented
        return brands.slice(0, 100)
    }

    static async findById(id: number): Promise<false | BrandNode> {
        return await getBrandById(id)
    }

    static async findConnectedCarModels(brandId: number): Promise<Array<CarModelNode>> {
        const carModelRelations = await getConnectedCarModels(brandId)
        if (!carModelRelations) {
            return []
        }

        const carModels = []
        for (const carModelRelation of carModelRelations) {
            carModels.push(await getCarModelById(carModelRelation.car_model_id))
        }

        return carModels
    }

    static async findConnectedImages(brandId: number): Promise<Array<ImageNode>> {
        const imageRelations = await getConnectedImages(brandId)
        if (!imageRelations) {
            return []
        }

        const images = []
        for (const imageRelation of imageRelations) {
            images.push(await getImageById(imageRelation.image_id))
        }

        return images
    }
}
