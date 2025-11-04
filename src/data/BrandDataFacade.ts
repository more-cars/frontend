import {getAllBrands} from "./brands/getAllBrands"
import {getBrandById} from "./brands/getBrandById"
import {getConnectedCarModels} from "./brands/getConnectedCarModels"
import {getConnectedImages} from "./brands/getConnectedImages"

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
