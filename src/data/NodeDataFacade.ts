import {getNodeById} from "./nodes/getNodeById"
import {getMainImages} from "./nodes/getMainImages"

export const NodeDataFacade = {
    async getNodeById(id: number) {
        return getNodeById(id)
    },

    async getMainImagesOfNodes(ids: number[]) {
        return getMainImages(ids)
    },
}
