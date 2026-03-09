import {getAllCarModelVariants} from "./node-types/car-model-variants/getAllCarModelVariants"
import {getCarModelVariantById} from "./node-types/car-model-variants/getCarModelVariantById"
import {getConnectedMainImage} from "./node-types/car-model-variants/getConnectedMainImage"
import {getConnectedCarModel} from "./node-types/car-model-variants/getConnectedCarModel"
import {getConnectedMagazineIssues} from "./node-types/car-model-variants/getConnectedMagazineIssues"
import {getConnectedLapTimes} from "./node-types/car-model-variants/getConnectedLapTimes"
import {getConnectedSessionResults} from "./node-types/car-model-variants/getConnectedSessionResults"
import {getConnectedRacingGames} from "./node-types/car-model-variants/getConnectedRacingGames"
import {getConnectedImages} from "./node-types/car-model-variants/getConnectedImages"

export const CarModelVariantDataFacade = {
    async getNodeCollection(params?: { page: number }) {
        return getAllCarModelVariants(params)
    },

    async getNodeById(id: number) {
        return getCarModelVariantById(id)
    },

    async getConnectedMainImageNode(id: number) {
        return getConnectedMainImage(id)
    },

    async getConnectedCarModelNode(id: number) {
        return getConnectedCarModel(id)
    },

    async getConnectedMagazineIssueNodes(id: number) {
        return getConnectedMagazineIssues(id)
    },

    async getConnectedLapTimeNodes(id: number) {
        return getConnectedLapTimes(id)
    },

    async getConnectedSessionResultNodes(id: number) {
        return getConnectedSessionResults(id)
    },

    async getConnectedRacingGameNodes(id: number) {
        return getConnectedRacingGames(id)
    },

    async getConnectedImageNodes(id: number) {
        return getConnectedImages(id)
    },
}
