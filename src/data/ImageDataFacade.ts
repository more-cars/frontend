import {getAllImages} from "./images/getAllImages"
import {getImageById} from "./images/getImageById"
import {getConnectedNodes} from "./images/getConnectedNodes"

export class ImageDataFacade {
    static async getNodeCollection() {
        return getAllImages()
    }

    static async getNodeById(id: number) {
        return getImageById(id)
    }

    static async getConnectedNodes(id: number) {
        return getConnectedNodes(id)
    }
}
