import {getAllBrands} from "./node-types/brands/getAllBrands"
import {getBrandById} from "./node-types/brands/getBrandById"
import {getConnectedCarModels} from "./node-types/brands/getConnectedCarModels"
import {getConnectedImages} from "./node-types/brands/getConnectedImages"

export class BrandDataFacade {
    static async getNodeCollection() {
        return getAllBrands()
    }

    static async getNodeById(id: number) {
        return getBrandById(id)
    }

    static async getConnectedCarModelNodes(id: number) {
        return getConnectedCarModels(id)
    }

    static async getConnectedImageNodes(id: number) {
        return getConnectedImages(id)
    }
}
