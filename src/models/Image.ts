import {getAllImages} from "../data/images/getAllImages"
import {getImageById} from "../data/images/getImageById"
import {getConnectedNodes} from "../data/images/getConnectedNodes"
import type {BrandNode} from "../types/brands/BrandNode"
import type {CarModelNode} from "../types/car-models/CarModelNode"
import type {ImageNode} from "../types/images/ImageNode"

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
            if (relation.data.relationship_partner.node_type === 'brand') {
                brands.push(relation.data.relationship_partner as BrandNode)
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
            if (relation.data.relationship_partner.node_type === 'car model') {
                carModels.push(relation.data.relationship_partner as CarModelNode)
            }
        }

        return carModels
    }
}
