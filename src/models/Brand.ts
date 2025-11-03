import type {BrandNode} from "../types/brands/BrandNode"
import type {CarModelNode} from "../types/car-models/CarModelNode"
import type {ImageNode} from "../types/images/ImageNode"
import {getBrandById} from "../data/brands/getBrandById"
import {getAllBrands} from "../data/brands/getAllBrands"
import {getConnectedCarModels} from "../data/brands/getConnectedCarModels"
import {getConnectedImages} from "../data/brands/getConnectedImages"

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

    static async findConnectedCarModels(brandId: number): Promise<CarModelNode[]> {
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

    static async findConnectedImages(brandId: number): Promise<Array<ImageNode>> {
        const imageRelations = await getConnectedImages(brandId)
        if (!imageRelations) {
            return []
        }

        const images = []
        for (const imageRelation of imageRelations) {
            images.push(imageRelation.data.relationship_partner as ImageNode)
        }

        return images
    }
}
