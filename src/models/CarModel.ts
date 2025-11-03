import type {CarModelNode} from "../types/car-models/CarModelNode.mts"
import type {BrandNode} from "../types/brands/BrandNode.mts"
import type {ImageNode} from "../types/images/ImageNode.mts"
import {getCarModelById} from "../data/car-models/getCarModelById.ts"
import {getAllCarModels} from "../data/car-models/getAllCarModels.ts"
import {getConnectedBrand} from "../data/car-models/getConnectedBrand.ts"
import {getConnectedImages} from "../data/car-models/getConnectedImages.ts"

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
        return await getCarModelById(id)
    }

    static async findConnectedBrand(carModelId: number): Promise<false | BrandNode> {
        const brandRelation = await getConnectedBrand(carModelId)

        if (!brandRelation) {
            return false
        }

        return brandRelation.data.relationship_partner
    }

    static async findConnectedImages(carModelId: number): Promise<Array<ImageNode>> {
        const imageRelations = await getConnectedImages(carModelId)
        if (!imageRelations) {
            return []
        }

        const images = []
        for (const imageRelation of imageRelations) {
            images.push(imageRelation.data.relationship_partner)
        }

        return images
    }
}
