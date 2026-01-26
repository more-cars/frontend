import {getAllBrands} from "./node-types/brands/getAllBrands"
import {getBrandById} from "./node-types/brands/getBrandById"
import {getConnectedCompany} from "./node-types/brands/getConnectedCompany"
import {getConnectedCarModels} from "./node-types/brands/getConnectedCarModels"
import {getConnectedImages} from "./node-types/brands/getConnectedImages"
import {getConnectedMainImage} from "./node-types/brands/getConnectedMainImage"

export const BrandDataFacade = {
    async getNodeCollection(params?: { page: number }) {
        return getAllBrands(params)
    },

    async getNodeById(id: number) {
        return getBrandById(id)
    },

    async getConnectedCompanyNode(id: number) {
        return getConnectedCompany(id)
    },

    async getConnectedCarModelNodes(id: number) {
        return getConnectedCarModels(id)
    },

    async getConnectedImageNodes(id: number) {
        return getConnectedImages(id)
    },

    async getConnectedMainImageNode(id: number) {
        return getConnectedMainImage(id)
    },
}
