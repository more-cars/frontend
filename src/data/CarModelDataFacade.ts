import type {DataSearchParams} from "./types/DataSearchParams"
import {getAllCarModels} from "./node-types/car-models/getAllCarModels"
import {getCarModelById} from "./node-types/car-models/getCarModelById"
import {getConnectedBrand} from "./node-types/car-models/getConnectedBrand"
import {getConnectedPredecessorCarModel} from "./node-types/car-models/getConnectedPredecessorCarModel"
import {getConnectedSuccessorCarModel} from "./node-types/car-models/getConnectedSuccessorCarModel"
import {getConnectedMainImage} from "./node-types/car-models/getConnectedMainImage"
import {getConnectedCarModelVariants} from "./node-types/car-models/getConnectedCarModelVariants"
import {getConnectedMagazineIssues} from "./node-types/car-models/getConnectedMagazineIssues"
import {getConnectedProgrammeEpisodes} from "./node-types/car-models/getConnectedProgrammeEpisodes"
import {getConnectedImages} from "./node-types/car-models/getConnectedImages"
import {getConnectedVideos} from "./node-types/car-models/getConnectedVideos"

export const CarModelDataFacade = {
    async getNodeCollection(params?: DataSearchParams) {
        return getAllCarModels(params)
    },

    async getNodeById(id: number) {
        return getCarModelById(id)
    },

    async getConnectedBrandNode(id: number) {
        return getConnectedBrand(id)
    },

    async getConnectedPredecessorCarModelNode(id: number) {
        return getConnectedPredecessorCarModel(id)
    },

    async getConnectedSuccessorCarModelNode(id: number) {
        return getConnectedSuccessorCarModel(id)
    },

    async getConnectedMainImageNode(id: number) {
        return getConnectedMainImage(id)
    },

    async getConnectedCarModelVariantNodes(id: number) {
        return getConnectedCarModelVariants(id)
    },

    async getConnectedMagazineIssueNodes(id: number) {
        return getConnectedMagazineIssues(id)
    },

    async getConnectedProgrammeEpisodeNodes(id: number) {
        return getConnectedProgrammeEpisodes(id)
    },

    async getConnectedImageNodes(id: number) {
        return getConnectedImages(id)
    },

    async getConnectedVideoNodes(id: number) {
        return getConnectedVideos(id)
    },
}
