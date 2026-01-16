import {getAllImages} from "./node-types/images/getAllImages"
import {getImageById} from "./node-types/images/getImageById"
import {getConnectedNodes} from "./node-types/images/getConnectedNodes"

export class ImageDataFacade {
    static async getNodeCollection(params: { page: number }) {
        return getAllImages(params)
    }

    static async getNodeById(id: number) {
        return getImageById(id)
    }

    static async getConnectedNodes(id: number) {
        return getConnectedNodes(id)
    }
}
