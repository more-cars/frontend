import {getAllMotorShows} from "./node-types/motor-shows/getAllMotorShows"
import {getMotorShowById} from "./node-types/motor-shows/getMotorShowById"
import {getConnectedMainImage} from "./node-types/motor-shows/getConnectedMainImage"
import {getConnectedCarModelVariants} from "./node-types/motor-shows/getConnectedCarModelVariants"
import {getConnectedImages} from "./node-types/motor-shows/getConnectedImages"

export const MotorShowDataFacade = {
    async getNodeCollection(params?: { page: number }) {
        return getAllMotorShows(params)
    },

    async getNodeById(id: number) {
        return getMotorShowById(id)
    },

    async getConnectedMainImageNode(id: number) {
        return getConnectedMainImage(id)
    },

    async getConnectedCarModelVariantNodes(id: number) {
        return getConnectedCarModelVariants(id)
    },

    async getConnectedImageNodes(id: number) {
        return getConnectedImages(id)
    },
}
