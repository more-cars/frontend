import {getAllImages} from "../data/images/getAllImages.ts"
import {getImageById} from "../data/images/getImageById.ts"
import {getConnectedNodes} from "../data/images/getConnectedNodes.ts"
import {getBrandById} from "../data/brands/getBrandById.ts"
import {getCarModelById} from "../data/car-models/getCarModelById.ts"
import type {BrandNode} from "../types/brands/BrandNode.mts"
import type {CarModelNode} from "../types/car-models/CarModelNode.mts"
import type {ImageNode} from "../types/images/ImageNode.mts"

export class Image {
    static async findAll(): Promise<Array<ImageNode>> {
        const images = await getAllImages()

        if (!images) {
            return []
        }

        // TODO remove the limiter when pagination is implemented
        return images.slice(0, 100)
    }

    static async findById(id: number): Promise<false | ImageNode> {
        return await getImageById(id)
    }

    static async findConnectedBrands(imageId: number): Promise<Array<BrandNode>> {
        const allRelations = await getConnectedNodes(imageId)
        if (!allRelations) {
            return []
        }

        const brands = []
        for (const relation of allRelations) {
            const brand = await getBrandById(relation.partner_node_id)
            if (brand) {
                brands.push(brand)
            }
        }

        return brands
    }

    static async findConnectedCarModels(imageId: number): Promise<Array<CarModelNode>> {
        const allRelations = await getConnectedNodes(imageId)
        if (!allRelations) {
            return []
        }

        const carModels = []
        for (const relation of allRelations) {
            const carModel = await getCarModelById(relation.partner_node_id)
            if (carModel) {
                carModels.push(carModel)
            }
        }

        return carModels
    }
}
