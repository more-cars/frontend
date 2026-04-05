import {getAllCarModelVariants} from "./node-types/car-model-variants/getAllCarModelVariants"
import {getCarModelVariantById} from "./node-types/car-model-variants/getCarModelVariantById"
import {getConnectedMainImage} from "./node-types/car-model-variants/getConnectedMainImage"
import {getConnectedCarModel} from "./node-types/car-model-variants/getConnectedCarModel"
import {getConnectedMagazineIssues} from "./node-types/car-model-variants/getConnectedMagazineIssues"
import {getConnectedRatings} from "./node-types/car-model-variants/getConnectedRatings"
import {getConnectedPrices} from "./node-types/car-model-variants/getConnectedPrices"
import {getConnectedProgrammeEpisodes} from "./node-types/car-model-variants/getConnectedProgrammeEpisodes"
import {getConnectedLapTimes} from "./node-types/car-model-variants/getConnectedLapTimes"
import {getConnectedSessionResults} from "./node-types/car-model-variants/getConnectedSessionResults"
import {getConnectedRacingGames} from "./node-types/car-model-variants/getConnectedRacingGames"
import {getConnectedModelCars} from "./node-types/car-model-variants/getConnectedModelCars"
import {getConnectedMotorShows} from "./node-types/car-model-variants/getConnectedMotorShows"
import {getConnectedImages} from "./node-types/car-model-variants/getConnectedImages"
import {getConnectedVideos} from "./node-types/car-model-variants/getConnectedVideos"

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

    async getConnectedRatingNodes(id: number) {
        return getConnectedRatings(id)
    },

    async getConnectedPriceNodes(id: number) {
        return getConnectedPrices(id)
    },

    async getConnectedProgrammeEpisodeNodes(id: number) {
        return getConnectedProgrammeEpisodes(id)
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

    async getConnectedModelCarNodes(id: number) {
        return getConnectedModelCars(id)
    },

    async getConnectedMotorShowNodes(id: number) {
        return getConnectedMotorShows(id)
    },

    async getConnectedImageNodes(id: number) {
        return getConnectedImages(id)
    },

    async getConnectedVideoNodes(id: number) {
        return getConnectedVideos(id)
    },
}
