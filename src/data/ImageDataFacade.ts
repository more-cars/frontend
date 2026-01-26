import {getAllImages} from "./node-types/images/getAllImages"
import {getImageById} from "./node-types/images/getImageById"
import {getConnectedNodes} from "./node-types/images/getConnectedNodes"

export const ImageDataFacade = {
    async getNodeCollection(params?: { page: number }) {
        return getAllImages(params)
    },

    async getNodeById(id: number) {
        return getImageById(id)
    },

    async getConnectedNodes(id: number) {
        return getConnectedNodes(id)
    },
}
