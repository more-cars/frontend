import {getAllBrands} from "./node-types/brands/getAllBrands"
import {getBrandById} from "./node-types/brands/getBrandById"
import {getConnectedCompany} from "./node-types/brands/getConnectedCompany"
import {getConnectedCarModels} from "./node-types/brands/getConnectedCarModels"
import {getConnectedImages} from "./node-types/brands/getConnectedImages"
import {getConnectedMainImage} from "./node-types/brands/getConnectedMainImage"

export class BrandDataFacade {
    static async getNodeCollection(params?: { page: number }) {
        return getAllBrands(params)
    }

    static async getNodeById(id: number) {
        return getBrandById(id)
    }

    static async getConnectedCompanyNode(id: number) {
        return getConnectedCompany(id)
    }

    static async getConnectedCarModelNodes(id: number) {
        return getConnectedCarModels(id)
    }

    static async getConnectedImageNodes(id: number) {
        return getConnectedImages(id)
    }

    static async getConnectedMainImageNode(id: number) {
        return getConnectedMainImage(id)
    }
}
